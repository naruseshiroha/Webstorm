const {override, fixBabelImports, addLessLoader} = require("customize-cra")

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        // style: "css" // change importing css to less
        style: true // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@brand-primary": "#1cae82", // 正常
            "@brand-primary-tap": "#1DA57A", // 按下
        },
        //   strictMath: true,
        //   noIeCompat: true,
        //   localIdentName: '[local]--[hash:base64:5]'
    }),
)