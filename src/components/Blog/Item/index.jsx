import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Item(props) {
  const time = props.time.split("T")[0];
  return (
    <div className="blog-article-item">
      <div className="blog-article-item-title">
        <Link to={`/blog/article/${props.number}`}>{props.title}</Link>
      </div>
      <div className="blog-article-item-time">{time}</div>
      <div className="blog-article-item-label"></div>
      <div className="blog-article-item-desc">
        <p>
          {props.desc.split("---")[0]}
          <span className="blog-article-item-desc-more">
            <Link to={`/blog/article/${props.number}`}>Learn more...</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Item;
