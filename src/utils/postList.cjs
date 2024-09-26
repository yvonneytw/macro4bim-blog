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
      let reactPath = fullPath.replace("..", "src");
      let title = await fs.promises.readFile(fullPath, "utf-8");
      title = title.split("\n").filter((row) => row.split("#").length == 2);
      if (title) title = title[0].replace(/\s+/g, " ").replace("#", "").trim();
      else title = "";
      let newEntry = {
        path: fullPath.replace("..", "src"),
        route: fullPath
          .toLowerCase()
          .replace(/..\/components\/pages|.md/g, "")
          .replace(" ", "-"),
        title: title,
      };
      // console.log(newEntry);
      out.push(newEntry);
    }
  }
}

const out = [];
async function exportJSON() {
  await walkDir("../components/pages/post");

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
