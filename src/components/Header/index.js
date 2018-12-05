import React, { Component } from 'react';
import { Row,Col } from 'antd'
import Util from '../../utils/utils'
import axios from '../../axios/index'
import './index.less'

export default class Footer extends Component {
  state = {
    sysTime: ''
  }
  componentWillMount() {
    this.setState({
      userName: '湖畔花园'
    })
    setInterval(() => {
      let sysTime = Util.formMateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIDate()
  }
  getWeatherAPIDate = ()=> {
    // axios.jsonP({
    //   url: ''
    // })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="##">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="bradcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}