import jsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
  static jsonP(options) {
    return new Promise((res, rej) => {
      jsonP(options.url, {
        param: 'callback'
      }, function(err, response) {

      })
    })
  }

  static ajax(options) {
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: 'https://www.easy-mock.com/mock/5b9a1164ecfec02b04f8da0c/mockapi',
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if(response.status === '200') {
          let res = response.data;
          if(res.code === '0') {
            resolve(res)
          }else {
            Modal.info({
              title: '提示',
              content: res.data.msg
            })
          }
        }else {
          reject(response.data)
        }
      })
    })
  }
}