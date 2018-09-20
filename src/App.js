import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderCustom from './components/Home/SiderCustom';
import HeaderCustom from './components/Home/HeaderCustom';
import './App.css';
import './style/index.less'

const { Content, Footer } = Layout;

class App extends Component {

  state = {
       collapsed: false,
  };

  toggle = () => {
    console.log(this.collapsed)
    this.setState({
        collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
        <Layout className="ant-layout-has-sider">
        <SiderCustom collapsed={this.state.collapsed} />
          <Layout>
            <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
            <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                React-industry-style ©2018 Created by MoRan08
            </Footer>
          </Layout>
      
    </Layout>
     
    );
  }
}


export default App;
