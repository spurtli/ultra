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
    'react',
    'react-native',
    'styled-components/native',
    'expo-linear-gradient'
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
