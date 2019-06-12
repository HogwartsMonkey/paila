const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const CleanWebpackPlugin  = require('clean-webpack-plugin');

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
    
        entry:{ 
          index: './src/pages/index.js'
         
      },
      
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options:{
                presets: [
                   '@babel/preset-env',
                   '@babel/preset-react'
                ]
             }
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
        new HtmlWebpackPlugin({template:'./src/pages/index.html',filename:'index.html'}),
        new MiniCssExtractPlugin({
          filename: devMode ? '[name].css' : '[name].[contenthash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
        })
      ],

      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },

    optimization: {
           runtimeChunk: 'single',
           splitChunks: {
             cacheGroups: {
               vendor: {
                 test: /[\\/]node_modules[\\/]/,
                 name: 'vendors',
                 chunks: 'all'
               }
               
             }
           }
          }


    }