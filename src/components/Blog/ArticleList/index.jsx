import React from "react";
import ArticleItem from "../ArticleItem";

function ArticleList(props) {
  const articleList = [];
  const issues = props.issues;
  const currentPage = props.pageNumber;
  const defautlPageSize = props.defautlPageSize;
  const start = currentPage === 1 ? 0 : (currentPage - 1) * defautlPageSize;
  const end =
    start + defautlPageSize < issues.length
      ? start + defautlPageSize
      : issues.length;
  for (let i = start; i < end; i++) {
    let item = issues[i];
    articleList.push(
      <ArticleItem
        key={item.id}
        number={item.number}
        title={item.title}
        labels={item.labels}
        time={item.created_at}
        desc={item.body}
      />
    );
  }
  return <div className="archive-list">{articleList}</div>;
}

export default ArticleList;
