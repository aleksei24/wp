const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { webpack } = require('webpack');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  // mode: 'production', // mode by default
  // mode: 'development',
  mode: mode,

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      favicon: './src/img/hard-hat.ico',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    /*new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: ['jpegtran'],
            },
        }),*/
    new ImageMinimizerPlugin({
      deleteOriginalAssets: false,
      filename: '[path][name].webp',
      minimizerOptions: { plugins: ['imagemin-webp'] },
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
      },
    ],
  },
  // if you need it, just use
  // devtool: 'source-map', // for production
  devtool: 'eval-source-map', // for development

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: false,
    port: 8080,
    liveReload: true,
    watchFiles: ['src/*.html'],
  },
};
