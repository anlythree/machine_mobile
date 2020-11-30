/*
 * @Description: 
 * @Autor: anlythree
 * @Date: 2020-11-30 17:03:33
 * @LastEditors: anlythree
 * @LastEditTime: 2020-11-30 17:52:20
 */
// 获取当前时间搓 下面打包时生成文件名 清除浏览器缓存用
const Timestamp = new Date().getTime();

module.exports = {
    // 访问路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    assetsDir: 'assets',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    // filenameHashing: true,
    // 构建多页时使用
    pages: undefined,
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: {
        // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        output: {
            filename: `[name].${process.env.VUE_APP_VERSIONS}.${Timestamp}.js`,
            chunkFilename: `[name].${process.env.VUE_APP_VERSIONS}.${Timestamp}.js`
        },
    },
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        /*config.module
          .rule('images')
          .use('url-loader')
            .loader('url-loader')
            .tap(options => {
              // 修改它的选项...
              return options
            })*/
    },
    // webpack-dev-server 相关配置
    devServer: {
        host: 'localhost', // 服务器的主机IP
        port: 8001, // 端口
        https: false,
        open: true, // 项目运行时自动在浏览器打开
        hotOnly: false, //  构建失败是回退
        proxy: { // 设置代理
            '/api': {
                target: 'http://103.72.146.31',
                pathRewrite: {
                    "^/api": ""
                }, // 替换 'api' 为 "/"
                changeOrigin: true, // 允许跨域请求
                // ws: true, // webSocket 支持
            }
        },
        before: app => {},
    },
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}