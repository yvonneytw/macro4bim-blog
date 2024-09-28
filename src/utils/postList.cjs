const fs = require("fs");

// {
//   _id: 'xxxxxxxxxxxxx',
//   path: 'src/components/pages/post/fileName.md',
//   route: '/post/fileName',
//   title: '<first-H1-tag>',
//   views: 0,
//   likes: 0,
//   comments: 0
// }

async function walkDir(root) {
  for await (const file of await fs.promises.opendir(root)) {
    fullPath = file["path"] + "/" + file["name"];
    if (file.isDirectory()) {
      walkDir(fullPath);
    } else if (file.name.toLowerCase().includes(".md")) {
      let route = fullPath
        .toLowerCase()
        .replace(/..\/assets|.md/g, "")
        .replace(" ", "-");
      let title = await fs.promises.readFile(fullPath, "utf-8");
      title = title.split("\n").filter((row) => row.split("#").length == 2);
      if (title) title = title[0].replace(/\s+/g, " ").replace("#", "").trim();
      else title = "";

      let newEntry = {
        path: fullPath.replace("..", "src"),
        route: route,
        title: title,
      };
      // console.log(newEntry);
      out.push(newEntry);
    }
  }
}

const out = [];
const rootFolder = "../assets/post";
async function exportJSON() {
  await walkDir(rootFolder);

  let jsonData = JSON.stringify(out);
  fs.writeFile("postList.json", jsonData, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log("JSON file has been saved.");
    }
  });

  console.log(out);
}
exportJSON();
