const path = require('path')
module.exports = {
  entry: path.resolve(__dirname,'src','index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname,'public')
  },
  module: {
    rules: [
      {
        // Passa uma expressão regular
        test: /\.js$/,
        // Não transpirar
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }

      }
    ]
  }
}