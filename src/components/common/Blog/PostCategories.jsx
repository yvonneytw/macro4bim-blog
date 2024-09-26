import { Link } from "react-router-dom";

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
    display: "flex",
    justifyContent: "right",
    gap: "1rem",
    flex: "0 1 50%",
  },
  link: {
    fontWeight: 200,
    padding: "0.25rem",
    outline: "1px solid hsl(0, 0%, 80%)",
  },
};

export default function PostCategories() {
  let categories = ["category1", "category2", "category3"];
  return (
    <div className="post-categories" style={styles.main}>
      <p style={{ flex: "0 1 100px", margin: 0 }}>Categories</p>
      <ul style={styles.list}>
        {categories.map((k, i) => (
          <li key={i}>
            <Link to={`/categories/${k}`} style={styles.link}>
              {k}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
