{
  // 实例: 实例对象
  // 类型: 类型对象
  function Person (name, age) {// 构造函数  类型
    this.name = name
    this.age = age
  }
  var p = new Person('tom', 12) // 根据类型创建的实例对象

  // Person('jack', 12)

  // 1. undefined与null的区别?
  var a
  console.log(a)
  a = null
  console.log(a)

  //起始
  var b = null  // 初始赋值为null, 表明将要赋值为对象
  //确定对象就赋值
  b = ['atguigu', 12]
  //最后
  b = null // 让b指向的对象成为垃圾对象(被垃圾回收器回收)
  // b = 2

  var c = function () {

  }

  console.log(typeof c) // 'function'

}