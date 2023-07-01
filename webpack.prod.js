const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")




module.exports = {
    mode: "production",
    entry: {
        index: "./src/js/index.js",
        products: "./src/js/products.js",
        categories: "./src/js/categories.js"
    },
    output: {
        path: path.join(__dirname, "build/js"),
        filename: '[name].[contenthash].bundle.js',
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
            use: [MiniCssExtractPlugin.loader, "css-loader"],}
            ,
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ] 
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    plugins: [
         new CleanWebpackPlugin(),

         new MiniCssExtractPlugin({
         filename: '../css/[name].[contenthash].css',
        }),

    new HtmlWebpackPlugin({
            template: "index.html",
            filename: '../index.html',
            chunks: ['index'],
        }),
        
    new HtmlWebpackPlugin({
        template: './src/pages/products.html', // Caminho para o template do about.html
        filename: '../pages/products.html', // Nome do arquivo de saída
        chunks: ['products'],
      })
]
}