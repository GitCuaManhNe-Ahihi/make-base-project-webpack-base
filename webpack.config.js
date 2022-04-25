const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // entry point dẫn tới index.js đã tạo
    output: {
        path: path.join(__dirname, '/build'), // đường dẫn đến thư mục chứa file build
        filename: 'bundle.js' // tên file build
    },
    module: {
        rules:[
            {
                test: /\.js$/, //sử dụng babel-loader để biên dịch js
                exclude: /node_modules/, // không biên dịch file node_modules
                use: ['babel-loader'] // sử dụng babel-loader
            },
            {
                test: /\.css$/, // sử dụng css-loader và style-loader để biên dịch css
                use: ['style-loader', 'css-loader']

            }
        ]
    },
    //chứa các plugin cần dùng 
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // đường dẫn đến file index.html
        })
    ],
    devServer: {
        port: 8000, // cổng chạy dev server
    }
}