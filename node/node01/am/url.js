const url = require('node01/am/url')

/*const urlString = 'http://api.guaqb.cn/music/id/card.php?id=430521199904102860'
const urlObj = url.parse(urlString)
console.log(urlObj)*/

const obj = {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'api.guaqb.cn',
  port: null,
  hostname: 'api.guaqb.cn',
  hash: null,
  search: '?id=430521199904102860',
  query: 'id=430521199904102860',
  pathname: '/music/id/card.php',
  path: '/music/id/card.php?id=430521199904102860',
  href: 'http://api.guaqb.cn/music/id/card.php?id=430521199904102860'
}
const urlString = url.format(obj)
console.log(urlString)

/*
* url 类比 json 记忆
* url.parse  将 url 字符串转成对象
* url.format 将 url 对象转成字符串
* */