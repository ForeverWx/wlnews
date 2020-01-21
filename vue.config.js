const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
// 基本路径
    publicPath: './',
// 输出文件目录
    outputDir: 'dist',
// eslint-loader 是否在保存的时候检查
    lintOnSave: true,

// webpack配置
// see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

    chainWebpack: (config) => {
        /* 添加分析工具*/
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch')
            }
        } else {
        }
    },

    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }

        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@c': path.resolve(__dirname, './src/components')
                }
            }
        });
    },

// 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
// css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
// use thread-loader for babel & TS in production build
// enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
// PWA 插件相关配置
// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
// webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 2001,
        https: false,
        hotOnly: false,
        open: true, //自动打开浏览器
        proxy: {
            // 设置代理
            // proxy all requests starting with /data to jsonplaceholder
            '/data': {
                target: 'http://localhost:7000',
                changeORIGIN: true
            }
        },
        before: (app) => {
        }
    },
// 第三方插件配置
    pluginOptions: {}
    /*"transpileDependencies": [
        "vuetify"
    ],
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    chainWebpack: (config) => {
        /!* 添加分析工具*!/
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch')
            }
        }
    }, configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 改成false 的 在打包之前 要改回true
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        //内网穿透禁用域名检查
        disableHostCheck: true,
        hot: true,
        open: true,                                 //配置自动启动浏览器
        host: '0.0.0.0',
        // host: 'localhost',
        port: 2001,                                 // 端口号
        https: false,
        hotOnly: false,                             // https:{type:Boolean}
        // 配置跨域处理,只有一个代理
        before: app => {
        }
    },
    // 第三方插件配置
    pluginOptions: {},
    /!* dev: {
         // Paths
         assetsSubDirectory: 'static',
         assetsPublicPath: './',
         proxyTable: {
             '/baiduApi': {
                 target: 'https://www.baidu.com', //访问地址
                 changeOrigin: true,
                 secure: false, //只有代理https 地址需要次选项
                 pathRewrite: {
                     '^/': ''
                 }
             }
         }
     }*!/*/
}
