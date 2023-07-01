const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index.js",
        products: "./src/js/products.js",
        categories: "./src/js/categories.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ['./index.html', './src/pages/*'],
        compress: true,
        port: 9000,
      },
    module:{
        rules: [
            {
                test: /\.js$/i,
                loader: "babel-loader",
                exclude: ["/node_modules/"],
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
            { 
                test: /\.css$/i,
            use: ["style-loader", "css-loader"],}
            ,
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ] 
    },
   
    plugins: [
      
        new HtmlWebpackPlugin(
            {
                template: "index.html",
                filename: 'index.html',
                chunks: ['index'],
            }
        ),
        new HtmlWebpackPlugin({
            template: './src/pages/products.html',
            filename: 'products.html',
            chunks: ['products'],
          })
    ]
   


}