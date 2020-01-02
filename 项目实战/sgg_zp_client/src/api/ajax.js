/*
* 能发送 ajax 请求的函数模块
* 函数的返回值是 promise 对象
* */
const axios = require('axios')
const qs = require('qs')


export default function ajax(url, data = {}, method = 'GET') {
  if (method === 'GET') {
    // 拼接字符串
    let paramStr = ''
    Object.keys(data).forEach(key => {
      paramStr += key + '=' + data[key] + '&'
    })
    if (paramStr) {
      paramStr = paramStr.substring(0, paramStr.length - 1)
    }
    // 使用 axios 发送GET请求
    console.log(qs.stringify(data))

    return axios.get(url + '?' + paramStr)
  } else if (method === 'POST') { // 发送 POST 请求
    return axios.post(url, data)
  }

}