const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const eslintFormatter = require('eslint-friendly-formatter');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const nodeEnv = process.env.npm_lifecycle_event === 'start' ? 'development' : 'production';
const common = {

  // entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.vue', '.html', '.json', '.css', '.scss'],
    alias: {
      // '@': resolve('src'),
      vue$: 'vue/dist/vue.esm.js',
    },
    // symlinks: false
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('test')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFormatter,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
          },
          // other vue-loader options go here
        },
        include: [path.resolve('src'), path.resolve('node_modules', 'bootstrap-vue')],
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        options: {
          interpolate: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['main', 'vendor'],
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new StyleLintPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};

const dev = {
  entry: [
    path.join(__dirname, 'src', 'index.js'),
    path.join(__dirname, 'src', 'styles', 'app-development.scss'),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    noInfo: true,
    host: '0.0.0.0',
    hot: true,
    port: 9000,
    proxy: {
      '/api': 'http://localhost:8080',
    },
    stats: 'errors-only',
  },
  bail: false,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const prod = {
  entry: [
    path.join(__dirname, 'src', 'index.js'),
    path.join(__dirname, 'src', 'styles', 'app-production.scss'),
  ],
  devtool: 'source-map',

  output: {
    filename: '[name].[chunkhash].js',
  },

  bail: true,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.[contenthash].css',
      allChunks: true,
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //   },
    // }),
  ],
};

switch (nodeEnv) {
  case 'development':
    module.exports = merge(common, dev);
    break;
  case 'production':
    module.exports = merge(common, prod);
    break;
  default:
    // eslint-disable-next-line no-console
    console.error(`ERROR: NODE_ENV ${nodeEnv} is not valid in webpack config!`);
    break;
}
