import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownRenderer({ content }) {
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
          blockquote({ node, children, ...props }) {
            if (
              typeof children[1].props.children == "string" &&
              children[1].props.children.startsWith(":::")
            ) {
              let className = children[1].props.children.replace(/:::|\s/g, "");
              return <div className={className}>{[children.slice(2)]}</div>;
            }
            return <blockquote {...props}>{children}</blockquote>;
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

MarkdownRenderer.propTypes = {
  content: PropTypes.string,
};
