var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: './frontend/musicians.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins:[
   new webpack.DefinePlugin({
     'process.env':{
       'NODE_ENV': JSON.stringify('production')
     }
   }),
   new webpack.optimize.UglifyJsPlugin({
     compress:{
       warnings: true
     }
   })
 ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
      test: /\.html$/,
      loader: 'html-loader?attrs[]=video:src'
    }, {
      test: /\.mp4$/,
      loader: 'url?limit=10000&mimetype=video/mp4'
    }]
  },
  devtool: 'source-maps'
};
