import { useEffect, useState } from "react";
import MarkdownRenderer from "../common/MarkdownRenderer";

export default function PyM4B() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const getContent = async () => {
      try {
        let response = await fetch("/pyM4B.md");
        let data = await response.text();
        setContent(data);
      } catch (error) {
        console.log("ERROR WHILE FETCHING MAIN MD: ", error);
      }
    };
    getContent();
  }, []);
  return <MarkdownRenderer content={content} />;
}
