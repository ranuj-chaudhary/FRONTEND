const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 1️⃣ Entry point
  output: {
    // 2️⃣ Output bundle
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // optional: Webpack 5+ has this built-in
  },
  module: {
    // 3️⃣ Loaders
    rules: [
      {
        test: /\.css$/, // 3a️⃣ If a file ends in .css
        use: ['style-loader', 'css-loader'], // Apply loaders from right to left
      },
      {
        test: /\.(js|jsx)$/, // 3b️⃣ For JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ to ES5
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ], // 4️⃣ Plugins for extra functionality
  devServer: {
    // 5️⃣ Dev server for hot reload
    static: './dist',
    hot: true,
    watchFiles: ['src/index.html'], // 👈 ADD THIS
    port: 3000,
  },
  mode: 'development', // 6️⃣ Mode: development or production
};
