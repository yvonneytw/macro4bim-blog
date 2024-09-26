// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.css";

// export default function HeaderComponent() {
//   return (
//     <nav className="site-header">
//       <CustomLink to="/blog" id="blog" />
//       <CustomLink to="/" id="home" />
//       <CustomLink to="/pym4b" id="pym4b" />
//       {/* <CustomLink to="/dynamo" id="dyn" /> */}
//     </nav>
//   );
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   // const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   const isActive = useMatch({ path: resolvedPath.pathname }); // removed the end so to not look for complete matching bu include sub urls
//   return (
//     <Link to={to} className={isActive ? "active" : ""} {...props}>
//       {children}
//     </Link>
//   );
// }

// CustomLink.propTypes = {
//   to: PropTypes.string.isRequired,
//   children: PropTypes.string,
// };

export default function HeaderComponent() {
  return (
    <nav className="site-header">
      <Link to={"/blog"} id="blog" />
      <Link to={"/"} id="home" />
      <Link to={"/pym4b"} id="pym4b" />
    </nav>
  );
}
