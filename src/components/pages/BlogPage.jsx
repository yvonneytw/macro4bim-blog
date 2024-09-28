import { Link } from "react-router-dom";

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
          let title = key.replace(/-/g, " ");
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
