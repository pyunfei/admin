import * as React from 'react'
import { Card, Col, Row, Descriptions, Badge, Button } from 'antd';

import styles from './index.module.less';

import { Button as MButton } from '../../widget/index';

const Index = () => {
  return (<div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card bordered={false}>
          <Button>default</Button>
          <Button disabled type="primary">primary</Button>
          <Button size="large">large</Button>
          <Button ghost>ghost</Button>
          <Button type="dashed">dashed</Button>
          <Button size="small">small</Button>
          <Button type="default">default</Button>
          <Button type="link">Link</Button>
          <Button danger>danger</Button>
          <Button  shape="circle" type="primary">circle</Button>
          <Button  shape="round" type="primary">round</Button>
          <hr/>
          <MButton type="default">default</MButton>
          <hr/>
          <MButton type="dashed">dashed</MButton>
          <hr/>
          <MButton type="link">link</MButton>
          <hr/>
          <MButton type="primary">primary</MButton>
          <hr/>
          <MButton type="danger">danger</MButton>
          <hr/>
          <MButton type="danger" shape="circle">circle</MButton>
          <hr/>
          <MButton shape="round" type="danger">round</MButton>
          <hr/>
          <MButton disabled type="danger" size="large">大的</MButton>
          <hr/>
          <MButton disabled type="primary" onClick={() => console.log('l')} size="small">小的</MButton>
          <hr/>
          <MButton type="primary" style={{ background: 'red'}} onClick={() => console.log('ll')}>自定义</MButton>
        </Card>
      </Col>

      <Col span={8}>
        <Card bordered={false}>
          123
        </Card>
      </Col>
    </Row>

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

    <Row className={styles.home_card}>
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