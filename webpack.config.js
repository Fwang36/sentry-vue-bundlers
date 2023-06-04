const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
require('dotenv/config')


module.exports = (env) => {

  return {
    entry: {
      main: "./src/main.js",
    },
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "distWebpack"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\/css$/i,
          use: ["vue-style-loader", "css-loader"]
        }
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./index.html"
      }),
      new Dotenv(),
      sentryWebpackPlugin({
        org: process.env.VITE_SENTRY_ORG,
        project: process.env.VITE_SENTRY_PROJECT,
        authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
        release: {name: "webpack1"}
      })
    ],
  };

  }