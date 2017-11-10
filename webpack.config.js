var debug = process.env.NODE_ENV === 'production'
var webpack = require('webpack')
var path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    context: path.join(__dirname),
    // devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        colors: true,
        contentbase: '/',
        progress: true,
        // historyApiFallback: true,
        compress: true,
        open: true
    },
    entry: {
        bundle: './src/js/root.js',
        vendor: ['whatwg-fetch', 'moment', 'react', 'react-dom']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', ['es2015',{module:false}], 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-runtime', ['import', [{
                        'libraryName': 'antd',
                        'libraryDirectory': 'lib',
                        'style': 'css'
                    }, {
                        'libraryName': 'amazeui-react',
                        'libraryDirectory': 'lib'
                    }, {
                        'libraryName': 'react-router',
                        'libraryDirectory': 'lib'
                    }]]], //添加组件的插件配置
                }
            },
            //下面是使用 ant-design 的配置文件
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    output: {
        path: __dirname,
        filename: './src/[name].js'
    },
    plugins: debug ? [] : [
        // new webpack.optimize.DedupePlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './src/vendor.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new BundleAnalyzerPlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: {
                warnings: false,
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
                unused: true
            }
        })
    ]
}
