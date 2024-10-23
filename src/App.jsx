import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import HeaderComponent from "./components/common/Header/Header";
import Home from "./components/pages/Home";
import BlogPage from "./components/pages/BlogPage";
import PyM4B from "./components/pages/pyM4B";
import Footer from "./components/common/Footer/Footer";
import BlogPost from "./components/common/Blog/BlogPost";
import LoginButton from "./components/common/Auth/LoginButton";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await fetch("/.netlify/functions/fetchPosts?published=true");
        let data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <HeaderComponent />
      <LoginButton />
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
          {posts.length > 0 && <Route path="/blog" element={<BlogPage posts={posts} />} />}
          <Route path="/" element={<Home />} />
          <Route path="/pym4b" element={<PyM4B />} />
          {posts.length > 0 &&
            posts.map((post) => {
              return <Route key={post._id} path={post.slug} element={<BlogPost post={post} />} />;
            })}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
