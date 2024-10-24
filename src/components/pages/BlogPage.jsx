import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { VotesIcon, ViewsIcon } from "../common/Blog/PostShareAndMetadata";
import DateFormat from "../common/DateFormat";

function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid hsl(0,0%,80%)",
        padding: "1rem",
        margin: 0,
      }}
    >
      <div style={{ backgroundColor: "darkgrey", height: "5rem" }}></div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <small style={{ color: "grey" }}>
        {<DateFormat date={post.createdAt} />}
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sunt?
      </small>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <VotesIcon votes={post.votes} />
        <ViewsIcon views={post.views} />
      </div>
    </div>
  );
}

function TileView({ posts }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap: "1rem",
      }}
    >
      {[...posts].reverse().map((post) => {
        return (
          <li key={post._id} style={{ flex: "0 0 32%" }}>
            {/* <Link to={post.slug}>{post.title}</Link> */}
            {<PostCard post={post} />}
          </li>
        );
      })}
    </ul>
  );
}
function DetailView({ posts }) {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        listStyle: "none",
        padding: 0,
      }}
    >
      {posts.map((post) => {
        return (
          <li key={post._id} style={{ borderBottom: "1px solid hsl(0, 0%, 80%)" }}>
            <Link to={post.slug}>
              <b>{post.title}</b> <br />
              <small>date: {<DateFormat date={post.createdAt} />}</small> <br />
              <small>{post.summary}</small>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function BlogPage({ posts }) {
  const [listMode, setListMode] = useState(true);

  return (
    <>
      <h1>Macro4BIM Blog</h1>
      <h2>Posts</h2>
      <p>
        Here is the core of Macro4BIM, where all the ideas come and are collected. Find
        below a list of the recent posts.
      </p>

      <ul className="button-list" style={{ marginLeft: "auto" }}>
        <li className={listMode ? "active" : ""} onClick={() => setListMode(!listMode)}>
          Tiles View
        </li>
        <li className={!listMode ? "active" : ""} onClick={() => setListMode(!listMode)}>
          Details
        </li>
      </ul>

      {listMode ? <TileView posts={posts} /> : <DetailView posts={posts} />}
    </>
  );
}
