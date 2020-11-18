import React from 'react';
import { Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

const _Sided = () => {
  return (<>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        nav 1
            </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        nav 1
            </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 1
            </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        nav 1
            </Menu.Item>
    </Menu>
  </>)
};

export default _Sided;