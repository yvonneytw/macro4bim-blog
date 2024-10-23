import PropTypes from "prop-types";
import PostCategories from "./PostCategories";
import MarkdownRenderer from "../MarkdownRenderer";
// import RecentPost from "./components/common/Blog/RecentPost";
import PostShareAndMetadata from "./PostShareAndMetadata";
import CommentList from "./CommentList";
import "./blog.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogPost({ post }) {
  const [content, setContent] = useState("");
  const location = useLocation();
  useEffect(() => {
    const getContent = async () => {
      let response = await fetch(post.path);
      let data = await response.text();
      setContent(data);
    };
    getContent();
  }, []);
  return (
    <>
      <PostCategories {...post} />
      <div className="framed">
        <MarkdownRenderer content={content} />
      </div>
      {/* <RecentPost /> */}
      <PostShareAndMetadata location={location.pathname} {...post} />
      <CommentList comments={post.comments} />
    </>
  );
}
