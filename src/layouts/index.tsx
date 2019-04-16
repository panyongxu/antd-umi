import React from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import Link from "umi/link";
import styles from './index.css';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

export default class Demo extends React.Component {
  render() {
    return (
      <div className={styles.layoutsIndex}>
        <Layout className="layout">
          <Header>
            <div className={styles.logos} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">商品</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">关于</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/login">登录</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

