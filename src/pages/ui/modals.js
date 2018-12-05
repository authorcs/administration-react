import React, { Component } from 'react';
import { Button, Modal} from 'antd'
export default class Modals extends Component {
  state = {
    visible: false
  }
  
  handleOpen = ()=> {
      this.setState({
        visible: true
      })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleOpen}>Open</Button>
        <Button type="primary">自定义页脚</Button>
        <Button type="primary">Open</Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    )
  }
}