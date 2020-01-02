/*
* 包含n个action creator
* 异步action
* 同步action
* */

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from "./action-types"

import {
  reqRegister,
  reqLogin
} from '../api/index'

// 授权成功的同步 action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步 action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

// 注册异步action
export const register = (user) => {
  return async dispatch => {
    /*const promise = reqRegister(user)
    promise.then(response => {
      const result = response.data // {code: 0/1, data: user, msg: ''}
    })*/
    // 发送注册的异步ajax请求
    const response = await reqRegister(user)
    const result = response.data // {code: 0/1, data: user, msg: ''}
    if (result.code === 0) { // 成功
      // 分发授权成功的同步 action
      dispatch(authSuccess(result.data))
    } else { // 失败
      // 分发错误提示信息的同步 action
      dispatch(errorMsg(result.msg))
    }
  }
}

// 登录异步action
export const login = (user) => {
  return async dispatch => {
    // 发送注册的异步ajax请求
    const response = await reqLogin(user)
    const result = response.data
    if (result.code === 0) { // 成功
      // 分发授权成功的同步 action
      dispatch(authSuccess(result.data))
    } else { // 失败
      // 分发错误提示信息的同步 action
      dispatch(errorMsg(result.msg))
    }
  }
}