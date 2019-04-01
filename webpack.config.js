const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
    
        entry:{ 
          prod: './src/main.js'
         
      },
      mode: 'development',
      devtool: 'inline-source-map',
      devServer : {
        contentBase: './src'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader','sass-loader', 
        ],
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({title:'Caching',template:'./src/index.html'}),
        new MiniCssExtractPlugin({
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
      ],

      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    }


    }