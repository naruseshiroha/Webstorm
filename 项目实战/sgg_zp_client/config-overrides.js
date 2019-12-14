const {override, fixBabelImports, addLessLoader} = require("customize-cra")

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        style: "css" // change importing css to less
    }),
)