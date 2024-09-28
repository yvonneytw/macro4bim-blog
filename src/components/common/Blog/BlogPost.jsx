import PropTypes from "prop-types";
import PostCategories from "./PostCategories";
import MarkdownRenderer from "../MarkdownRenderer";
// import RecentPost from "./components/common/Blog/RecentPost";
// import PostShareAndMetadata from "./components/common/Blog/PostShareAndMetadata";
import CommentList from "./CommentList";
import "./blog.css";

export default function BlogPost({ content }) {
  return (
    <>
      <PostCategories />
      <div className="framed">
        <MarkdownRenderer content={content} />
      </div>
      {/* <RecentPost /> */}
      {/* <PostShareAndMetadata /> */}
      <CommentList />
    </>
  );
}

BlogPost.propTypes = {
  content: PropTypes.string,
};
