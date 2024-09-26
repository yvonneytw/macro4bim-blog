import PropTypes from "prop-types";

// SAMPLE DATA
// {
//   _id: 5a9427648b0beebeb69579e7,
//   name: "Mercedes Tyler",
//   email: "mercedes_tyler@fakegmail.com",
//   text: "Eius veritatis vero facilis quaerat fuga temporibus. Praesentium exped…",
//   date: 2002-08-18T04:56:07.000+00:00
// }

export default function Comment({ name, date, text }) {
  return (
    <div className="comment">
      <div className="comment-head">
        <span className="user">{name}</span>
        <span className="date">{date}</span>
      </div>
      <div className="comment-body">{text}</div>
    </div>
  );
}

Comment.propTypes = {
  // user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.date,
  text: PropTypes.string.isRequired,
};
