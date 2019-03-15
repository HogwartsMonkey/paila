const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({title:'Caching',template:'./src/index.html'})
      ],

      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    }


    }