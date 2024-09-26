import Comment from "./Comment";

const comments = [
  {
    _id: "5a9427648b0beebeb69579e7",
    name: "Mercedes Tyler",
    email: "mercedes_tyler@fakegmail.com",
    text: "Eius veritatis vero facilis quaerat fuga temporibus. Praesentium exped…",
    date: "2002-08-18T04:56:07.000+00:00",
  },
];

export default function CommentList({ comments }) {
  return (
    <div className="framed">
      {comments.map((comment) => (
        <div key={comment._id} className="comment-stack">
          <Comment {...comment} />
        </div>
      ))}
      ;
    </div>
  );
}
