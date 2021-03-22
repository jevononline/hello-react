import React from 'react';
import { Link } from 'react-router-dom';
import PageRouter from '../../router/index';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Main extends React.Component {
  constructor(props) {
    super(props)
    // 没有super(props), 后面使用回报错
    // 定义state
    // bind方法
    // 其他初始化工作
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"><Link to="/">home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/login">login</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/">nav 3</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1"><Link to="/lesson1">lesson1</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/lesson2">lesson2</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/lesson3">lesson3</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/lesson4">lesson4</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content className='right-menu' style={{ margin: '20px 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {props.children}
                </div>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    );
  }
}
export default Main