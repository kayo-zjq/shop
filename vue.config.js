const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
transpileDependencies: true,
   //devServer: {
    //hot: true, // 启用模块热替换（Hot Module Replacement，HMR）
    //open: true, // 在启动后打开浏览器
    //port: 8080, // 设置端口号
  //},
  lintOnSave: false,
})
