const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  target: "web",
  output: {
    filename: '[name].js',
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        exclude: [path.resolve(__dirname, "node_modules/excalibur")],
        enforce: "pre",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'file-loader',
        type: 'javascript/auto'
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: "@thoughtpivot/terrene",
    }),
    new CopyPlugin(
        { patterns: [{ from: "./src/modules/scenes/MainMenu.json", to: "./scenes/MainMenu.json"}, { from: "./src/modules/scenes/MoonGraas/MoonGraas.tsx", to: "./scenes/MoonGraas/MoonGraas.tsx"}, { from: "./src/modules/scenes/MainMenu.png", to: "./scenes/MainMenu.png"}, { from: "./src/modules/characters/player/You/You.mp3", to: "./characters/player/You/You.mp3"}]},
    )
  ],
};
