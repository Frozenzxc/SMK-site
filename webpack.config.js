const path = require(`path`);

module.exports = {
  entry: `./source/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `build`),
    open: false,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
};
