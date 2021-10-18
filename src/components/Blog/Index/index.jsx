import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { fetchIssues } from "../../../redux/actions/blog";
import List from "../List";
import "./index.css";

function Index(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultPageSize, setDefaultPageSize] = useState(8);

  const { items: issues } = props.blog;

  useEffect(() => {
    props.fetchIssues();
  }, []);

  if (props.isFetching) {
    return null;
  }
  return (
    <div className="main">
      <div className="main-container">
        <Row>
          <Col xs={24} sm={24} md={18}>
            <List
              issues={issues}
              defaultPageSize={defaultPageSize}
              pageNumber={currentPage}
            />
          </Col>
          <Col xs={0} sm={0} md={6}>
            {/* <RightSider issues={this.props.items} /> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default connect((state) => ({ blog: state.blog }), { fetchIssues })(
  Index
);
