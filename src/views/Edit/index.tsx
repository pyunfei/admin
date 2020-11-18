import React from 'react';
import { Card, Col, Row, Descriptions, Badge } from 'antd';

import './index.less';

const Index = () => {
  return <>
    <Row gutter={16}>
      <Col span={4}>
        <Card className="edit_box" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={16}>
        <Card className="edit_box" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={4}>
        <Card className="edit_box" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </>
};


export default Index