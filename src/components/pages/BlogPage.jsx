import { Link } from "react-router-dom";
import postList from "../../utils/postList.json";
// import PropTypes from "prop-types";

export default function BlogPage() {
  return (
    <>
      <h1>Macro4BIM Blog</h1>
      <h2>Posts</h2>
      <p>
        Here is the core of Macro4BIM, where all the ideas come and are collected. Find below a list
        of the recent posts.
      </p>

      <ul>
        {postList.map((post, i) => (
          <li key={i}>
            <Link to={post.route}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
