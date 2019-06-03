const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const CleanWebpackPlugin  = require('clean-webpack-plugin');


module.exports = {
    
        entry:{ 
          prod: './src/main.js'
         
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
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                       'file-loader'
                     ]
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
        new  CleanWebpackPlugin(),
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