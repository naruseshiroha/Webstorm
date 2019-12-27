var express = require('express');
var router = express.Router();

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
router.post("/register", function (req, res) { // req, res [,next]
    console.log("register()")
    // 1. 获取请求参数
    const {username, password} = req.body
    // 2. 处理
    if (username === "admin") { // 注册会失败
        // 返回响应数据(失败)
        res.send({code: 1, message: "此用户已存在2333"})
    } else { // 注册会失败
        // 返回x响应数据(成功)
        res.send({
            code: 0, data: {id: "abc123", username, password}
        })
    }
})

module.exports = router;
