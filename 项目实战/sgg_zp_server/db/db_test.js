/*使用 mongoose 操作 mongodb 的测试文件
1. 连接数据库
    1.1 引入 mongoose
    1.2 连接指定数据库(URL 只有数据库是变化的)
    1.3 获取连接对象
    1.4 绑定连接完成的监听(用来提示连接成功)
2. 得到对应特定集合的 Model
    2.1 字义 Schema(描述文档结构)
    2.2 定义 Model(与集合对应, 可以操作集合)
3. 通过 Model 或其实例对集合数据进行 CRUD 操作
    3.1 通过 Model 实例的 save()添加数据
    3.2 通过 Model 的 find()/findOne()查询多个或一个数据
    3. 通过 Model 的 findByIdAndUpdate()更新某个数据
    3.4 通过 Model 的 remove()删除匹配的数据
*/

const md5 = require("blueimp-md5")

// 1. 连接数据库
// 1.1 引入 mongoose
const mongoose = require("mongoose")
// 1.2 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect("mongodb://localhost:27017/sgg_zp_test")
// 1.3 获取连接对象
const conn = mongoose.connection
// 1.4 绑定连接完成的监听(用来提示连接成功)
conn.on("connected", () => {
    console.log("数据库连接成功, yeah!")
})

// 2. 得到对应特定集合的model
// 2.1 定义Schema(描述文档结构)
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true}
})
// 2.2 定义Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model("user", userSchema) // 集合: users
// CRUD

// 3.1 通过Model实例的save()添加数据
function testSave() {
    // user数据对象
    const user = {
        username: "xfzhang",
        password: md5("1234"),
        type: "dashen"
    }

    const userModel = new UserModel(user)
    // 保存到数据
    userModel.save((err, user) => {
        console.log("save", err, user)
    })
}

// testSave()

// 3.2 通过Model的find()/findOne()查询多个或一个数据
function testFind() {
    // 查找多个
    UserModel.find((err, user) => {
        // 如果有匹配返回的是一个[user, user...] 集合
        // 如果没有一个匹配的返回[]
        console.log("find()", err, user)
    })
    // 查找一个
    UserModel.findOne({_id: "5df82600dead1e397cca06ef"}, (err, user) => {
        // 如果有匹配返回的是一个user, 如果没有一个匹配的返回null
        console.log("findOne()", err, user)
    })
}

// testFind()

// 3.3 通过Model的findByIdAndUpdate()更新某个数据
function testUpdate() {
    UserModel.findByIdAndUpdate({_id:"5df82600dead1e397cca06ef"},{username:"xiaofz"}, (err,user) => {
        console.log("findByIdAndUpdate()", err, user)
    })
}

// testUpdate()
