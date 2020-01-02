const express = require('express');
const router = express.Router();
const md5 = require('blueimp-md5')

const {UserModel} = require("../db/models")
const filter = {password: 0, __v: 0} // 指定查询时过滤出指定的属性


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

// 注册一个路由: 用户注册
/*
* a)path为: /register
* b)请求方式为: POST
* c)接收username和password参数
* d)admin是已注册用户
* e)注册成功返回: {code: 0, data: {_id: "abc", username: "xxx", password:"123"}}
* f)注册失败返回: {code: 1, msg:"此用户已存在"}
* */
/*
* 1. 获取请求参数
* 2. 处理
* 3. 返回x响应数据
* */

// 注册的路由
router.post('/register', (req, res) => {
  // 读取请求的参数数据
  const {username, password, type} = req.body
  // 处理: 判断用户是否已经存在, 如果存在, 提示返回错误的信息, 如果不存在, 保存
  // 查询(根据 username )
  UserModel.findOne({username}, (error, user) => {
    // 如果 user 有值(已存在)
    if (user) {
      // 返回提示错误的信息
      res.send({code: 1, msg: '此用户名已存在'})
    } else { // user === null (不存在)
      // 保存
      new UserModel({username, type, password: md5(password)}).save((error, user) => {
        // 返回包含 user 的 json 数据
        const data = {username, type, _id: user._id} // 响应数据中不要携带 password
        res.send({code: 0, data})
      })
    }
  })
})

// 登陆的路由
router.post('/login', (req, res) => {
  const {username, password} = req.body
  // 根据 username 和 password 查询数据库 users, 如果没有, 返回提示错误的信息, 如果有, 返回登陆成功信息(包含user)
  UserModel.findOne({username, password: md5(password)}, filter, (error, user) => {
    if (user) { // 登录成功
      // 生成一个cookie(userid: user_id), 并交给浏览器保存
      res.cookie('userid', user._id, {maxAge: 1000 * 60 * 60 * 24 * 7})
      // 返回登录成功信息(包含 user)
      res.send({code: 0, data: user})
    } else { // 登陆失败
      res.send({code: 1, msg: '用户名或密码不正确'})
    }
  })
})

module.exports = router;
