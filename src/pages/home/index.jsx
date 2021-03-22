import React from 'react';
import logo from '../../logo.svg'
import './index.less'
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      currentKey: "1"
    }
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <div className="logo"> <img src={logo} alt='logo' /></div>
            <Menu theme="dark" mode="horizontal" selectedKeys={[this.state.currentKey]}>
              <Menu.Item key="1"><Link to="/">home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/login">login</Link></Menu.Item>
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
                    <Menu.Item key="5"><Link to="/lesson5">lesson5</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                    <Menu.Item key="6"><Link to="/lesson6">lesson6</Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/lesson7">lesson7</Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/lesson8">lesson8</Link></Menu.Item>
                    <Menu.Item key="9"><Link to="/lesson9">lesson9</Link></Menu.Item>
                    {/* <Menu.Item key="10"><Link to="/lesson10">lesson10</Link></Menu.Item> */}
                  </SubMenu>
                </Menu>
              </Sider>
              <Content className='right-menu' style={{ margin: '20px 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 760 }}>
                  {this.props.children}
                </div>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </div>
    )
  }
}

export default withRouter(Home)