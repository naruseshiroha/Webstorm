/*
* 包含n个ruduce函数: 根据老的state和指定的action返回一个新的state
* */
import {combineReducers} from "redux";

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from "./action-types";

const initUser = {
  username: '', // 用户名
  type: '', // 用户类型 laoban/dashen,
  msg: '', // 错误提示信息
}

// 产生 user 状态的reducer
function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: // data 是 user
      return {...state, ...action.data}
    case ERROR_MSG: // data 是 msg
      return {...state, msg: action.data}
    default:
      return state
  }
}

export default combineReducers({
  user
})
// 向外暴露的状态的结构: {user: {}}