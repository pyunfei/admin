import * as React from 'react'
import { Card, Col, Row, Descriptions, Badge } from 'antd';

import './index.less';

const Index = () => {
  return (<div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="收藏" bordered={false}>
          Card content
      </Card>
      </Col>
      <Col span={8}>
        <Card title="云服务" bordered={false}>
          Card content
      </Card>
      </Col>
      <Col span={8}>
        <Card title="邮件" bordered={false}>
          Card content
      </Card>
      </Col>
    </Row>

    <Row className="home_card">
      <Col span={24}>
        <Card bordered={false}>
          <Descriptions title="User Info" bordered>
            <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
            <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
            <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
            <Descriptions.Item label="Usage Time" span={2}>
              2019-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text="Running" />
            </Descriptions.Item>
            <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
            <Descriptions.Item label="Config Info">
              Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
    </Row>
  </div>)
}

export default Index;