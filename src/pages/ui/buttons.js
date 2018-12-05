import React, { Component } from 'react';
import { Card, Button } from 'antd'
import Modals from './modals'
import './ui.less'
export default class Buttons extends Component {
  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button disabled>禁用</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button>编辑</Button>
          <Button icon="search">搜索</Button>
          <Button type="danger">下载</Button>
          <Button disabled>禁用</Button>
        </Card>
        <Card title="模态对话框">
          <Modals />
        </Card>
      </div>
    )
  }
}