import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { fetchIssuesIfNeeded } from "../../../redux/actions/blog";
import ArticleArea from "../ArticleArea";
import "./index.css";

function BlogIndex(props) {
  useEffect(() => {
    props.fetchIssuesIfNeeded();
  }, []);

  if (props.isFetching) {
    return null;
  }
  return (
    <div className="main">
      <div className="main-container">
        <Row>
          <Col xs={24} sm={24} md={18}>
            <ArticleArea issues={props.items} />
          </Col>
          <Col xs={0} sm={0} md={6}>
            {/* <RightSider issues={this.props.items} /> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({ isFetching: state.isFetching, items: state.items }),
  { fetchIssuesIfNeeded }
)(BlogIndex);
