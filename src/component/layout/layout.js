import React from 'react'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default function AppLayout(props) {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} >
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2'] } >
          <Menu.Item key="1">HOME</Menu.Item>
          <Menu.Item key="2">LIST</Menu.Item>
          <Menu.Item key="3">CATE </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0px', marginTop: 45 }}>
        <main>{props.children}</main>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}