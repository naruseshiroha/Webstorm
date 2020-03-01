{
  //1. 基本
  // typeof返回数据类型的字符串表达
  var a
  console.log(a, typeof a, typeof a === 'undefined', a === undefined)
  // undefined 'undefined' true true
  console.log(undefined === 'undefined') // false
  a = 4
  console.log(typeof a === 'number') // true
  a = 'atguigu'
  console.log(typeof a === 'string') // true
  a = true
  console.log(typeof a === 'boolean') // true
  a = null
  console.log(typeof a, a === null)  // 'object' true

  console.log('-----------------')
  //2. 对象
  var b1 = {
    b2: [1, 'abc', console.log],
    b3: function () {
      console.log('b3')
      return function () {
        return 'xfzhang'
      }
    }
  }

  console.log(b1 instanceof Object, b1 instanceof Array) // true false
  console.log(b1.b2 instanceof Array, b1.b2 instanceof Object) // true true
  console.log(b1.b3 instanceof Function, b1.b3 instanceof Object) // true true

  console.log(typeof b1.b2, '-------') // 'object'

  console.log(typeof b1.b3 === 'function') // true

  console.log(typeof b1.b2[2] === 'function') // true
  b1.b2[2](4) // 4
  console.log(b1.b3()()) // b3 'xfzhang'


  /*var obj = {
    name: 'Tom',
    age: 12
  }
  function test () {
    var a = 3
  }
  var arr = [3, 'abc']
  arr[1]*/

}