const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  entry: ['./front/main.js'],
  output: {
    path: path.resolve('./server/dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js', '.vue', '.less'],
    alias: {
      pages: '/front/pages',
      components: '/front/pages/components'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue/,
        loader: 'vue',
        exclude: /node_modules/
      },
      {
        test: /\.js/,
        loader: 'babel',
        exclude: (path) => {
          return !!path.match(/node_modules/);
        },
        query: {
          presets: ["es2015", "stage-2"],
          plugins: 'transform-runtime'
        }
      },
      {
        test: '/\.less$/',
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/server/template/production.ejs',
      hash: true,
      filename: __dirname + '/server/views/index.ejs',
      inject: 'body'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        drop_console: true,
        pure_funcs: ['console.log']
      },
      mangle: {
        except: ['$', 'exports', 'require']
      }
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.NoErrorsPlugin(),
  ]
}

if (process.env.NODE_ENV === 'development') {
  const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

  webpackConfig.entry.push(hotMiddlewareScript);
  webpackConfig.devtool = 'cheap-module-eval-source-map';
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css'),
  ];
}

module.exports = webpackConfig;