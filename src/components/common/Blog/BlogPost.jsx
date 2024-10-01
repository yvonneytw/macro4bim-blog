import PropTypes from "prop-types";
import PostCategories from "./PostCategories";
import MarkdownRenderer from "../MarkdownRenderer";
// import RecentPost from "./components/common/Blog/RecentPost";
import PostShareAndMetadata from "./PostShareAndMetadata";
import CommentList from "./CommentList";
import "./blog.css";
import { useLocation } from "react-router-dom";

export default function BlogPost({ content }) {
  const location = useLocation();
  return (
    <>
      <PostCategories />
      <div className="framed">
        <MarkdownRenderer content={content} />
      </div>
      {/* <RecentPost /> */}
      <PostShareAndMetadata
        location={location.pathname}
        likes={1}
        views={20}
        date={"2024-08-18"}
      />
      <CommentList />
    </>
  );
}

BlogPost.propTypes = {
  content: PropTypes.string,
};
