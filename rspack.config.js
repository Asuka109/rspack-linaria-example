/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: '@linaria/webpack-loader'
          },
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                target: 'es2016',
                parser: { syntax: 'typescript' }
              }
            }
          }
        ],
        type: 'javascript/auto'
      }
    ]
  },
  builtins: {
    html: [
      {
        template: './index.html'
      }
    ],
    copy: {
      patterns: [
        {
          from: 'public'
        }
      ]
    }
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
};
module.exports = config;
