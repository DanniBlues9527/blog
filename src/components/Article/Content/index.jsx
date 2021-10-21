import React, { useEffect } from "react";
import marked from "marked";
import highlight from "highlight.js";

function Content(props) {
  useEffect(() => {
    marked.setOptions({
      highlight: (code) => highlight.highlightAuto(code).value,
    });
  }, []);

  const renderer = {
    heading(text, level) {
      return `
              <h${level} id="${escape(text.toLowerCase())}">
                ${text}
              </h${level}>`;
    },
  };

  marked.use({ renderer });

  return (
    <div className="article-list-area">
      <div className="article-list">
        <div className="article-title">
          <h2>{props.title}</h2>
        </div>
        <div className="article-time">{props.time.split("T")[0]}</div>
        <div
          className="article-detail"
          dangerouslySetInnerHTML={{ __html: marked(props.content) }}
        ></div>
      </div>
    </div>
  );
}

export default Content;
