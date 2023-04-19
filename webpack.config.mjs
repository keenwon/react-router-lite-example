import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const getAbsPath = (relativePath) => path.resolve(dirname, relativePath)

const resolver = {
  extensions: ['.ts', '.tsx', '.mjs', '.cjs', '.js', '.jsx'],
  alias: {
    '@typings': getAbsPath('typings'),
    '@views': getAbsPath('src/views'),
    '@router': getAbsPath('src/router/index.ts'),
  },
}

export default () => {
  const entry = 'src/index'
  const fileName = '[name]'
  const outputPath = 'dist'

  const config = {
    entry: {
      app: [getAbsPath(entry)],
    },
    output: {
      filename: `assets/js/${fileName}.js`,
      chunkFilename: `assets/js/${fileName}.js`,
      path: getAbsPath(outputPath),
      publicPath: '/',
    },
    target: 'web',
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    resolve: resolver,
    node: false,
    cache: {
      type: 'filesystem',
    },
    stats: {
      all: false,
      errors: true,
      errorDetails: true,
      warnings: true,
    },
    devServer: {
      host: '0.0.0.0',
      hot: true,
      client: {
        overlay: true,
      },
      historyApiFallback: {
        disableDotRule: true,
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `assets/css/${fileName}.css`,
        chunkFilename: `assets/css/${fileName}.css`,
      }),
      new webpack.DefinePlugin({
        global: 'window',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new HtmlWebpackPlugin({
        template: '!!ejs-webpack-loader!./src/index.ejs',
      }),
      new ReactRefreshWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx|mjs|js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]-[contenthash:base64:4]',
                },
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
      ],
    },
  }

  return config
}

export { resolver }
