const path = require('path')
const glob = require('glob')
const PAGE_PATH = path.resolve(__dirname, './src/pages')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

exports.sourcePath = path.join(__dirname, './src/')

exports.outputPath = path.join(__dirname, './dist/')

//多入口配置
exports.entries = function () {
    var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map
}

//多页面输出配置
exports.htmlPlugin = function () {
    var entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
    var arr = []
    entryHtml.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        var conf = {
            template: filePath,
            filename: filename + '.html',
            chunks: [filename],
            inject: true
        }
        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                chunks: ['manifest', 'vendor', filename],
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                },
                chunksSortMode: 'dependency'
            })
        }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
}