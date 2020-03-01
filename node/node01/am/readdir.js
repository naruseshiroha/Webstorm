const fs = require('fs')
// 同步读取文件
try {
  // 可能出错的代码
  let dirs = fs.readdirSync('./node2')
} catch (err) {
  console.log('读取错误')
  console.log(err)
}
console.log(222)
// console.log(dirs)

// 异步读取
/*fs.readdir('./node01', (err, data) => {
  // console.log(err)
  // console.log(data)

  if (err) { // err 为真有错误 默认是 null
    console.log('读取错误')
  } else {
    console.log(data)
  }
})*/

// 错误的回调优先 在回调函数中第一个参数表示错误对象 默认为 null 如果出现错误 err 就是错误对象

/*
* 错误处理 同步: try catch 异步: 错误回调优先
* 文件夹的错误
* C(create)U(update)R(read)D(delete)
* */