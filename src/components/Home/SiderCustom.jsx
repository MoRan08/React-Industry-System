import React,{ Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../mock/menu';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
     state = {
          collapsed: false,
          mode: 'inline',
          openKey: '',
          selectedKey: '',
          menuData:[]
      };
      
      openMenu = v => {
          this.setState({
              openKey: v[v.length - 1]
          })
      };

      componentDidMount(){
        let _this=this;
        axios.post('http://text.com/menu',{
          userID:"admin"
        })
        .then(function (response) {
          _this.setState({
            menuData: response.data
         });
          
        })
        .catch(function (error) {
        });
        
      }

      render() {
       
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto'}}
            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={[this.state.openKey]}
                    onOpenChange={this.openMenu}
                >
                    <Menu.Item key="/app/dashboard/index">
                      <Icon type="bank" theme="outlined" /><span className="nav-text">首页</span>
                    </Menu.Item>

                    {this.state.menuData.map((item, index)=>{
                      return <SubMenu
                                key={item.key}
                                title={<span><Icon type={item.icon} theme="outlined" /><span className="nav-text">{item.name}</span></span>}
                            >

                            {item.son_menu.map((items, indexs) => {
                                return <Menu.Item key={items.key}>{items.name}</Menu.Item>
                              })
                            }
                                
                          </SubMenu>
                    })
                  }
                    
                    
                  </Menu>
                </Sider>
                );
          }
  }

  export default SiderCustom;