// This script is a function that dinamically create a page from the markdown found in the pages/ directory
import { useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";

export default function MarkdownRenderer(props) {
  let file = "";
  const params = useParams();
  if (props.file == undefined && Object.keys(params).includes("mdFile")) {
    file = props.mdDir + params.mdFile + ".md";
  } else {
    file = props.file;
  }
  const [content, setContent] = useState("");
  fetch(file)
    .then((response) => response.text())
    .then((text) => setContent(text));
  return (
    <div className="md-renderer">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter style={vscDarkPlus} language={match[1]} {...props}>
                {children}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

MarkdownRenderer.propTypes = {
  file: PropTypes.string,
  mdDir: PropTypes.string,
};
