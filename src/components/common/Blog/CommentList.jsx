import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import SeedComments from "./SeedComments.json";

export default function CommentList() {
  let currentPathname = useLocation().pathname;
  return (
    <div className="framed" style={{ padding: "0 3rem" }}>
      <h3>Coments</h3>
      {SeedComments.map((comment) => {
        if (comment.pathname == currentPathname) {
          return (
            <div key={comment._id} className="comment-stack">
              <Comment {...comment} />
            </div>
          );
        }
      })}
    </div>
  );
}