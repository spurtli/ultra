import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.js',
      format: 'cjs'
    },
    {
      file: './lib/index.es6.js',
      format: 'esm'
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
    'styled-components/native'
  ],
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx']
    }),
    babel({
      extensions: ['.ts', '.tsx'],
      exclude: 'node_modules/**'
    })
  ]
};
