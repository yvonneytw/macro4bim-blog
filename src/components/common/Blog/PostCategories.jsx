import { Link } from "react-router-dom";

export default function PostCategories() {
  let categories = ["category1", "category2", "category3"];
  return (
    <div className="post-categories">
      <p style={{ flex: "0 1 100px", margin: 0 }}>Categories</p>
      <ul>
        {categories.map((k, i) => (
          <li key={i}>
            <Link to={`/categories/${k}`}>{k}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
