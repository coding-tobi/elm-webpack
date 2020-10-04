const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.elm$/i,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: {
            cwd: path.resolve(__dirname, "elm"),
            optimize: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: "elm webpack starter",
      template: "index.ejs",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
  },
};
