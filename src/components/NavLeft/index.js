import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig'
import { NavLink } from 'react-router-dom'
import './index.less'

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data)=> {
    return (
      data.map((item) => {
        if(item.children) {
          return (
            <SubMenu key={item.key} title={item.title}>
              {this.renderMenu(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div className="logo">
          <img src="/assets/logo.svg" alt=""/>
          <h2>HOME MS</h2>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </Fragment>
    )
  }
} 