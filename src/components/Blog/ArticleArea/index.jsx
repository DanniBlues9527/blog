import React, { useState } from "react";
import ArticleList from "../ArticleList/index";
// import ArticlePaging from ''

export default function ArticleArea(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultPageSize, setDefaultPageSize] = useState(8);
  return (
    <div className="archive-list-area">
      <ArticleList
        issues={props.issues}
        defaultPageSize={defaultPageSize}
        pageNumber={currentPage}
      />
    </div>
  );
}
