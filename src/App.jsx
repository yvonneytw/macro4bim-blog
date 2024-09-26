// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/common/Header/Header";
// import "./App.css";
import Home from "./components/pages/Home";
import BlogPage from "./components/pages/BlogPage";
import Footer from "./components/common/Footer";
import MarkdownRenderer from "./components/common/MarkdownRenderer";
import CommentList from "./components/common/Comment/CommentList";
import RecentPost from "./components/common/Blog/RecentPost";
import PostCategories from "./components/common/Blog/PostCategories";
import PostShareAndMetadata from "./components/common/Blog/PostShareAndMetadata";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <HeaderComponent />
      <div className="main">
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/pym4b"
            element={<MarkdownRenderer file="src/components/pages/pym4b.md" />}
          />

          <Route
            path="/post/:mdFile"
            element={
              <>
                <PostCategories />
                <div className="framed">
                  <MarkdownRenderer mdDir="../src/components/pages/post/" />
                </div>
                {/* <PostShareAndMetadata /> */}
                {/* <RecentPost /> */}
                {/* <CommentList /> */}
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
