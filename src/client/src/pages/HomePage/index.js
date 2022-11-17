import React, { useState } from "react";
import { Col, Divider, Row, Card } from "antd";

const HomePage = () => {
  return (
    <Col>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Card title" bordered={false}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default HomePage;
