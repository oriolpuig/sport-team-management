const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  entry: {
    app: './index.jsx',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  devtool: 'source-map',
  watchOptions: {
    poll: 100,
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8000',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    },
  },
  output: {
    path: path.join(__dirname, '../client'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(scss|gif)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /vendor\/.+\.(jsx|js)$/,
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window',
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      // Flexbox Grid
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Caching vendors with manifest
    // https://webpack.js.org/guides/code-splitting-libraries/#manifest-file
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
    }),
    // Expose jquery used
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
  ],
};
