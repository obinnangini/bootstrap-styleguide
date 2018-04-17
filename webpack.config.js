const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const eslintFormatter = require('eslint-friendly-formatter');

const nodeEnv = process.env.npm_lifecycle_event === 'start' ? 'development' : 'production';
const common = {

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.vue', '.html', '.json', '.css', '.scss'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
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
        use: ['style-loader', 'css-loader', 'sass-loader?sourceMap'],
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
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
    stats: 'errors-only',
  },

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

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader?sourceMap',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
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
