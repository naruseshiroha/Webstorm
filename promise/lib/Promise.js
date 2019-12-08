/*
* 自定义Promise函数模块: IIFE
* */
(function (window) {

    const PENDING = "pending"
    const RESOLVED = "resolved"
    const REJECTED = "rejected"

    /*
    * Promise构造函数
    * executor: 执行器函数(同步执行)
    * */
    function Promise(executor) {
        const me = this;

        me.status = PENDING // 给Promise对象指定status属性,初始值为pending
        me.data = undefined // 给Promise对象z指定一个用于存储结果数据的属性
        me.callBacks = [] // 每个元素的结构: { onResolved() {}, onReject() {} }

        function resolve(value) {
            // 如果当前状态不是pending,直接结束
            if (me.status !== PENDING) {
                return
            }

            // 将状态改为resolved
            me.status = RESOLVED
            // 保存value数据
            me.data = value
            // 如果有待执行的callBack函数,立即异步执行回调函数onResolved
            if (me.callBacks.length > 0) {
                setTimeout(() => { // 放入队列中执行所有成功的h回调
                    me.callBacks.forEach(callBacksObj => {
                        callBacksObj.onResolved(value)
                    })
                })
            }
        }

        function reject(reason) {
            // 如果当前状态不是pending,直接结束
            if (me.status !== PENDING) {
                return
            }

            // 将状态改为resolved
            me.status = REJECTED
            // 保存value数据
            me.data = reason
            // 如果有待执行的callBack函数,立即异步执行回调函数onRejected
            if (me.callBacks.length > 0) {
                setTimeout(() => { // 放入队列中执行所有成功的h回调
                    me.callBacks.forEach(callBacksObj => {
                        callBacksObj.onRejected(reason)
                    })
                })
            }
        }

        // 立即同步执行executor
        try {
            executor(resolve, reject)
        } catch (e) { // 如果执行器抛出异常,Promise对象变为rejected状态
            reject(e)
        }
    }

    Promise.prototype.then = function (onResolved, onRejected) {
        const me = this

        // 指定回调函数的默认值
        onResolved = typeof onResolved === "function" ? onResolved : value => value
        onRejected = typeof onRejected === "function" ? onRejected : reason => {
            throw  reason
        }

        return new Promise((resolve, reject) => {
            /*
            * 返回promise的结果由onResolved/onRejected执行结果决定
            * 1. 抛出异常,返回promise的结果为失败,reason为异常
            * 2. 返回的是promise对象,返回promise的结果就是这个结果
            * 3. 返回的不是promise对象,返回promise为成功,value就是返回值
            * */
            function handle(callBack) {
                try {
                    const result = callBack(me.data)
                    if (result instanceof Promise) { // 2. 返回的是promise对象,返回promise的结果就是这个结果
                        result.then(resolve, reject)
                    } else { // 3. 返回的不是promise对象,返回promise为成功,value就是返回值
                        resolve(result)
                    }
                } catch (e) { // 1. 抛出异常,返回promise的结果为失败,reason为异常
                    reject(e)
                }
            }

            if (me.status === RESOLVED) {

                setTimeout(() => {
                    handle(onResolved)
                })
            } else if (me.status === REJECTED) {
                setTimeout(() => {
                    handle(onRejected)
                })
            } else {
                me.callBacks.push({
                    onResolved(value) {
                        handle(onResolved)
                    },
                    onRejected(reason) {
                        handle(onRejected)
                    }
                })
            }
        })
    }

    /*
    * Promise原型对象的then()
    * 指定成功和失败的回调函数
    * 返回一个新的Promise对象
    * 返回promise的结果由onResolved/onRejected执行结果决定
    * */
    // Promise.prototype.then = function (onResolved, onRejected) {
    //
    //     onResolved = typeof onResolved === "function" ? onResolved : value => { // 向后传递成功的value
    //         throw value
    //     }
    //     // 指定默认的失败的回调(实现错误/异常传透的关键点)
    //     onRejected = typeof onRejected === "function" ? onRejected : reason => { // 向后传递失败的reason
    //         throw reason
    //     }
    //
    //     const me = this;
    //
    //     // 返回一个新的Promise对象
    //     return new Promise((resolve, reject) => {
    //
    //         /*
    //     * 调用指定的回调函数处理,根据执行结果,改变return的promise的状态
    //     * */
    //         function handle(callBack) {
    //             /*
    //             * 1. 如果抛出异常,return的promise就会失败,reason就是error
    //             * 2. 如果回调函数返回不是promise,return的promise就会成功,value就是返回的值
    //             * 3. 如果返回的是promise,return的promise结果就是这个promise的结果
    //             * */
    //             try {
    //                 const result = callBack(me.data)
    //                 if (result instanceof Promise) {
    //                     // 3. 如果返回的是promise,return的promise结果就是这个promise的结果
    //                     /*result.then(
    //                         value => resolve(value), // 当result成功时,让return的promise也成功
    //                         reason => reject(reason) // 当result失败时,让return的promise也失败
    //                     )*/
    //                     result.then(resolve, reject)
    //                 } else {
    //                     // 2. 如果回调函数返回不是promise,return的promise就会成功,value就是返回的值
    //                     resolve(result)
    //                 }
    //             } catch (e) {
    //                 reject(e)
    //             }
    //         }
    //
    //         if (me.status === PENDING) {
    //             // 当前状态是pending状态,将回调函数保存起来
    //             me.callBacks.push({
    //                 onResolved(value) {
    //                     handle(onResolved)
    //                 },
    //                 onRejected(reason) {
    //                     handle(onRejected)
    //                 }
    //             })
    //         } else if (me.status === RESOLVED) { // 如果当前时resolved状态,异步执行onResolved并改变return的promise状态
    //             setTimeout(() => {
    //                 handle(onResolved)
    //             })
    //         } else { // 如果当前时rejected状态,异步执行onRejected并改变return的promise状态
    //             setTimeout(() => {
    //                 handle(onRejected)
    //             })
    //         }
    //     })
    // }

    /*
    * Promise原型对象的catch()
    * 指定失败的回调函数
    * 返回一个新的Promise对象
    * */
    Promise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected)
    }

    /*
    * Promise函数对象的resolve方法
    * 返回一个指定结果的成功的Promise对象
    *
    * */
    Promise.resolve = function (value) {
        // 返回一个成功/失败的Promise
        return new Promise((resolve, reject) => {
            // value是Promise
            if (value instanceof Promise) { // 使用value的结果作为promise的结果
                value.then(resolve, reject)
            } else {
                // value不是Promise   =>  promise变为成功
                resolve(value)
            }
        })
    }

    /*
    * Promise函数对象的reject方法
    * 返回一个指定结果的失败的Promise对象
    * */
    Promise.reject = function (reason) {
        // 返回一个失败的Promise
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    /*
    * Promise函数对象的all方法
    * 返回一个Promise对象,只有当所有promise都成功时才成功,否则只要有一个失败d的就失败
    * */
    Promise.all = function (promises) {

        // 用来保存所有成功value的数组
        const values = new Array(promises.length)
        // 用来保存成功promise的数量
        let resolvedCount = 0
        return new Promise((resolve, reject) => {
            // 遍历获取每个promise的结果
            promises.forEach((p, index) => {
                Promise.resolve(p).then(
                    value => {
                        resolvedCount++ // 成功的数量加1
                        // p成功,将成功的value保存到values
                        // values.push(value)
                        values[index] = value

                        // 如果全部成功了,将return的promise改为成功
                        if (resolvedCount === promises.length) {
                            resolve(values)
                        }
                    },
                    reason => {
                        reject(reason)
                    }
                )
            })
        })
    }

    /*
    * Promise函数对象的race方法
    * 返回一个Promise对象,其结果由第一个完成的promise绝对
    * */
    Promise.race = function (promises) {
        // 返回一个promise
        return new Promise((resolve, reject) => {
            promises.forEach(p => {
                Promise.resolve(p).then(
                    value => { // 一旦有成功的,将return的promise变为成功
                        resolve(value)
                    },
                    reason => { // // 一旦有成功的,将return的promise变为成功
                        reject(reason)
                    }
                )
            })
        })
    }

    /*
    * 返回一个成功promise对象,它在指定的事件后才确定结果
    * */
    Promise.resolveDelay = function (value, time) {
        // 返回一个成功/失败的Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // value是Promise
                if (value instanceof Promise) { // 使用value的结果作为promise的结果
                    value.then(resolve, reject)
                } else {
                    // value不是Promise   =>  promise变为成功
                    resolve(value)
                }
            }, time)
        })
    }

    /*
    * 返回一个失败promise对象,它在指定的事件后才确定结果
    * */
    Promise.rejectDelay = function (reason, time) {
        // 返回一个失败的Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(reason)
            }, time)
        })
    }

    // 向外暴露Promise函数
    window.Promise = Promise
})(window)