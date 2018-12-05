import React, { Component } from 'react';
import { Card, Table } from 'antd'
import axios from 'axios'
import $ajax from '../../axios/index';

export default class BasicTable extends Component {
  state = {
    dataSource: ''
  }
  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        userName: 'jack',
        sex: '1',
        state: '1',
        interest: '1',
        time: '2000-01-02'
      }
    ]
    this.setState({
      dataSource
    })
    this.request()
  }

  request = ()=> {
    $ajax.ajax({
      url: '/table/list',
      data: {
        params: {
          page: 1
        }
      }
    }).then((res) => {
      if(res.code === '0') {
        this.setState({
          dataSource: res.result
        })
      }
    })
    // let baseUrl = 'https://www.easy-mock.com/mock/5b9a1164ecfec02b04f8da0c/mockapi'
    // axios.get(baseUrl+'/table/list').then((res) => {
    //   this.setState({
    //     dataSource: res.data.result
    //   })
    // })
  }

  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest'
      },
      {
        title: '时间',
        dataIndex: 'time'
      }
    ]   
    return (
      <div>
        <Card title="基础表格">
          <Table 
            bordered
            columns={columns} 
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格" style={{marginTop: '15px'}}>
          <Table 
            bordered
            columns={columns} 
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}