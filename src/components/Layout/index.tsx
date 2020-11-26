import * as React from 'react'
import { Layout } from 'antd'
import { Footer } from 'antd/lib/layout/layout';
import Sided from './Sided';
import styles from './index.module.less';

import Home from '../../views/Home';
import Drag from '../../views/Drag';
// import Edit from '../../views/Edit';

const { Header, Sider, Content } = Layout;

const LayOut = () => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <div className="layout_container">
      <Layout className="layout_container">
        <Sider
          collapsed={show}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
            // if(broken) return;
            // setShow(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            if(type === "clickTrigger"){
              setShow(collapsed);
            }
          }}
        >
          <div className={styles.logo} />
          <Sided />
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content >
            <div className="site-layout-background" style={{ padding: 24 }}>
              {/* <Home /> */}
              <Drag />
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