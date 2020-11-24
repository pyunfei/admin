import * as React from 'react'
import { Layout } from 'antd'
import { Footer } from 'antd/lib/layout/layout';
import Sided from  './Sided';
import styles from './index.module.less';

import Home from '../../views/Home';
// import Edit from '../../views/Edit';

const { Header, Sider, Content } = Layout;

const LayOut = () => {
  return (
    <div className="layout_container">
      <Layout className="layout_container">
        <Sider
          // collapsed={true}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken: any) => {
            console.log(broken);
          }}
          onCollapse={(collapsed: any, type: any) => {
            console.log(collapsed, type);
          }}
        >
          <div className={styles.logo} />
          <Sided />
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content >
            <div className="site-layout-background" style={{ padding: 24}}>
              <Home />
              {/* <Edit /> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayOut;