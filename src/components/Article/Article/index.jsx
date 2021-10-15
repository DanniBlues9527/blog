import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import Content from "../Content/";
import Navigation from "../Navigation/";
import "./index.css";

function Article(props) {
  const [content, setContent] = useState(null);
  const [navigation, setNavigation] = useState(null);
  useEffect(() => {
    let url = `https://api.github.com/repos/DanniBlues9527/article/issues/${props.match.params.number}`;
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setContent(
          <Content
            number={data.number}
            title={data.title}
            time={data.updated_at}
            content={data.body}
          />
        );
        setNavigation(<Navigation content={data.body} />);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="main">
      <div className="main-container">
        <Row>
          <Col xs={24} sm={24} md={18}>
            {content}
          </Col>
          <Col xs={0} sm={0} md={6}>
            {navigation}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Article;
