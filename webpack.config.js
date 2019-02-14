const path = require('path')

module.exports = {
  entry: {
    home: './frontend/lib/home/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/frontend/dist'
  },
  mode: 'production',
};
