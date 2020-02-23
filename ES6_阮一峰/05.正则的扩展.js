// 1.RegExp 构造函数
{
  // 在 ES5 中，RegExp构造函数的参数有两种情况。
  // 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）。
  {
    const r1 = new RegExp('xyz', 'i')
    // 等价于
    const r2 = /xyz/i
  }

  // 第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
  {
    const r1 = new RegExp(/xyz/, 'i')
    // 等价于
    const r2 = /xyz/i
  }

  // 但是，ES5 不允许此时使用第二个参数添加修饰符，否则会报错。
  {
    const regex = new RegExp(/xyz/, 'i');
    // Uncaught TypeError: Cannot supply flags when constructing one RegExp from another
  }

  {/*
  * ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。
  * 而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
  * */
    const r1 = new RegExp(/abc/ig, 'i')
    console.log(r1.flags)
  }
}

console.log("--- --- --- --- ---")

// 2.字符串的正则方法
{
  /*
  * 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()。
  * ES6 将这 4 个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。
  * String.prototype.match 调用 RegExp.prototype[Symbol.match]
  * String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
  * String.prototype.search 调用 RegExp.prototype[Symbol.search]
  * String.prototype.split 调用 RegExp.prototype[Symbol.split]
  * */
}

console.log("--- --- --- --- ---")

// 3.u 修饰符
{
  // ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。
  // 也就是说，会正确处理四个字节的 UTF-16 编码。
  {
    console.log(/^\uD83D/u.test('\uD83D\uDC2A'))// false
    console.log(/^\uD83D/.test('\uD83D\uDC2A'))// true
  }

  /*
  * 一旦加上u修饰符号，就会修改下面这些正则表达式的行为。
  * */
  // (1). 点字符
  // 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。
  // 对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符。
  {
    var s = '𠮷';

    console.log(/^.$/.test(s)) // false

    console.log(/^.$/u.test(s)) // true
  }

  // (2). Unicode 字符表示法
  // ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，
  // 否则会被解读为量词。
  {
    console.log(/\u{61}/.test('a')) // false
    console.log(/\u{61}/u.test('a')) // true
    console.log(/\u{20BB7}/u.test('𠮷')) // true
  }

}

console.log("--- --- --- --- ---")

