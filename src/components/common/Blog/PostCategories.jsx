import { Link } from "react-router-dom";

export default function PostCategories({ tags, createdAt, updatedAt }) {
  const dateFormat = { month: "short", day: "2-digit", year: "numeric" };

  if (updatedAt != undefined) console.log(updatedAt);
  return (
    <header className="blog-header">
      <div>
        <small>Tags</small>
        <ul>
          {tags.map((tag, i) => {
            return (
              <li key={i}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <small>Date: {new Date(createdAt).toLocaleDateString("en-US", dateFormat)}</small>
      {updatedAt && (
        <>
          <br />
          <small>
            updatedAt: {new Date(updatedAt).toLocaleDateString("en-US", dateFormat)}
          </small>
        </>
      )}
    </header>
  );
}
