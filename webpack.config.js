const webpack = require('webpack');

module.exports = {
  entry: './src/**/**/*.js',
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};