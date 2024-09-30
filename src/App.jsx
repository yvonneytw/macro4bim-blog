// import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderComponent from "./components/common/Header/Header";
import Home from "./components/pages/Home";
import BlogPage from "./components/pages/BlogPage";
import Footer from "./components/common/Footer/Footer";
import MarkdownRenderer from "./components/common/MarkdownRenderer";
import BlogPost from "./components/common/Blog/BlogPost";
const markdownFiles = import.meta.glob("./assets/**/*.md", { eager: true });

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <HeaderComponent />
      <div
        className="main"
        style={{
          marginTop: `${useLocation().pathname == "/" ? "calc(100vh + 1rem)" : ""}`,
        }}
      >
        <Routes>
          {
            // scroll up at each route change
            window.scrollTo(0, 0)
          }
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/pym4b"
            element={
              <>
                <MarkdownRenderer content={markdownFiles["./assets/pyM4B.md"].default} />
              </>
            }
          />

          {Object.keys(markdownFiles).map((file) => {
            if (!file.includes("/post/")) return;
            let key = file.split("/").pop().replace(".md", "");
            let route = `/post/${key}`;

            return (
              <Route
                key={key}
                path={route}
                element={<BlogPost content={markdownFiles[file].default} />}
              />
            );
          })}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
