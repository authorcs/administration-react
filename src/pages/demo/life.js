import React from 'react'
import './index.less'
import { Button, Radio, Icon } from 'antd';

export default class Life extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleClick = ()=> {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleClickReduce () {
    console.log(this)
  }

  render() {
    const size = this.state.size;
    return (
      <div style={{color: 'red'}}>
        <p>{this.state.count}</p>
        <Button type="danger" size={size}>Dashed</Button>
        <p className='react-p' onClick={this.handleClick}>react证明周期结束</p>
        <p onClick={this.handleClickReduce.bind(this)}>react减少</p>
      </div>
    )
  }
}