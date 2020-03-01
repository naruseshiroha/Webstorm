# node

## what
    chrome v8 runtime
    事件驱动
    非阻塞的I/O
    
    I/O: input/output 输入输出流 正常下I/O的操作都是阻塞的(ajax 同步)
    网络请求 数据库处理 文件的读写 ...
    优点: 高并发特别好
## why
    1. 防止甩锅, 明确数据交互的错误问题在谁
    2. 能够书写api 斜杠青年
    3. 了解前后端的交互流程
    4. 全干
    
## api接口
    [api接口文档](http://47.95.207.1:3000/apidoc/)
    
    
### js运行环境
    浏览器
        基本语法
        BOM
        DOM
        ajax
        系统文件数据库 (不能, 不是语言不能 处于安全性考虑不能)
    服务器
        基本语法
        能操作数据库
        能操作本地文件
        
### nvm
详见笔记文档

###  node运行环境 REPL
直接在命令行写代码

### 模块化
    内置模块 (node 中)
        文件操作
    第三方模块
    自定义模块
        创建一个模块 (一个js文件一个模块)
        导出一个模块 (module.exports=name)
        引用一个模块并调用
        
#### 打印当前目录的目录树
    1. 实现的效果
    2. 分析功能点
        当前目录结构
        分辨是文件还是文件夹
        
### 内置模块 fs

### 内置模块 url
URL(Uniform Resource Locator) 统一资源定位符
http://api.guaqb.cn/music/id/card.php?id=430521199904102860

### 爬虫案例


### 邮箱验证案例
    注册案例  18670246233
    
    
    
### 网络基本知识
    web服务器
    api服务器
    