import { Link } from "react-router-dom";

function getTitle(content) {
  let titles = content.split("\n").filter((row) => row.split("#").length == 2);
  if (titles.length > 0) return titles[0].replace(/\s+/g, " ").replace("#", "").trim();
  else return "---";
}

export default function BlogPage() {
  const markdownFiles = import.meta.glob("../../assets/post/*.md", { eager: true });
  return (
    <>
      <h1>Macro4BIM Blog</h1>
      <h2>Posts</h2>
      <p>
        Here is the core of Macro4BIM, where all the ideas come and are collected. Find below a list
        of the recent posts.
      </p>

      <ul>
        {Object.keys(markdownFiles).map((mdPath) => {
          let key = mdPath.split("/").pop().replace(".md", "");
          let route = `/post/${key}`;
          let title = getTitle(markdownFiles[mdPath].default);
          return (
            <li key={key}>
              <Link to={route}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
