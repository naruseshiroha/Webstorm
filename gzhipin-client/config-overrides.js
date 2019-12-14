const {
    override,
    fixBabelImports,
} = require("customize-cra");


module.exports = override(

    /*addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@brand-primary": "#1cae82", "@brand-primary-tap": "#1DA57A", "@hd": "1px"},
        //   strictMath: true,
        //   noIeCompat: true,
        //   localIdentName: '[local]--[hash:base64:5]'
    }),*/
    fixBabelImports("import", {
        libraryName: "antd-mobile", libraryDirectory: "es", style: "css" // change importing css to less
    })
)