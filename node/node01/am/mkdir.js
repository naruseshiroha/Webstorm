const fs = require('fs')
/*fs.mkdir('./test', (err) => {
  console.log(err)
})*/

// 更改
/*fs.rename('./test','./test01',(err) => {
  if (err) {
    console.log('更改失败')
  } else {
    console.log('ok')
  }
})*/

// 删除 只能删除空文件夹
fs.rmdir('./node01',(err) => {
  if (err) {
    console.log('删除失败')
    console.log(err)
  } else {
    console.log('ok')
  }
})