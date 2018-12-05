import React from "react"
import { Card, Form, Input, Button, Icon, message } from "antd"

const FormItem = Form.Item

class FromLogin extends React.Component {  

  handleSubmit = (e)=> {
    e.preventDefault();
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName}恭喜你，登录成功`)
      }
    });
  }

  render() {
    const { getFieldDecorator }  = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                initialValue: 'jack',
                rules: []
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
              )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
                initialValue: '1234',
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form onSubmit={this.handleSubmit} style={{width: '300px'}}>
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FromLogin)