const qs = require('querystring') // sep 拆分连接符   eq 拆分键值对
// const string = 'name=zyy&pass=linux0410&gender=female'
// const obj = qs.parse(string)

// const string = 'name-zyy#pass-linux0410#gender-female'
// const obj = qs.parse(string,'#','-')
// 将query字符串变成query对象 split
// console.log(obj)

// stringify
// const obj = {name: 'zengyuanyi', pass: 'zyy0410', gender: 'female'}
// const string = qs.stringify(obj) // [&,=]
// const string = qs.stringify(obj,'#','-')
// console.log(string)

// const stringify = 'w=你好世界&foo=bar'
// const result = qs.escape(stringify)
// console.log(result)

const stringify = 'w%3D%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C%26foo%3Dbar'
const result = qs.unescape(stringify)
console.log(result)