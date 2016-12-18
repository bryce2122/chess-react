var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');
var pianoPath = path.resolve(__dirname, 'app', 'piano.js');
var stonewallPath = path.resolve(__dirname, 'app', 'stonewall.js');
var frenchPath = path.resolve(__dirname, 'app', 'french.js');
var caroPath = path.resolve(__dirname, 'app', 'caro.js');

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: {

   
    bundle:mainPath,
    piano: pianoPath,
    stonewall:stonewallPath,
    caro:caroPath,
    french:frenchPath
  },
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: '[name].js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  module: {

    loaders: [

    // I highly recommend using the babel-loader as it gives you
    // ES6/7 syntax and JSX transpiling out of the box
    {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          compact: false
        }
      },
    // Let us also add the style-loader and css-loader, which you can
    // expand with less-loader etc.
    {
      test: /\.css$/,
      loader: 'style!css'
    }

    ]
  },

 
 


  node: {
  fs: "empty"
},






  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;