import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";

export default function CommentList({ comments }) {
  // let currentPathname = useLocation().pathname;
  return (
    <div className="framed" style={{ padding: "0 3rem" }}>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment._id} className="comment-stack">
            <Comment {...comment} />
          </div>
        );
      })}
      <CommentAdd />
    </div>
  );
}
