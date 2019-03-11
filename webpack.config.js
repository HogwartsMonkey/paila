const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
        entry:{ 
          prod: './src/main.js'
         
      },

      plugins: [
        new HtmlWebpackPlugin({title:'Caching',template:'./src/index.html'})
      ],

      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    }


    }