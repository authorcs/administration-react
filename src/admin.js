import React, {Component} from 'react'
import Header from './components/Header/'
import Footer from './components/footer/'
import NavLeft from './components/NavLeft/'
import {Row,Col} from 'antd'
import Content from './pages/home/'
import './style/common.less'
// 采用antd栅格布局

export default class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row className="content">
            {/* <Content/> */}
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}