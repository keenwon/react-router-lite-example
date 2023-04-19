import { resolver } from './webpack.config.mjs'

export default () => {
  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          modules: false,
        },
      ],
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      ['@jleonardvp/babel-plugin-module-resolver', resolver],
      'react-refresh/babel'
    ],
  }

  return config
}
