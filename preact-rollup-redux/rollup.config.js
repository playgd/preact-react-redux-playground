'use strict';

import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import npm from 'rollup-plugin-npm'
import uglify from 'rollup-plugin-uglify'

const shouldUgilfy = () => {
  return process.env.UGLIFY === 'true' ? uglify() : () => {}
}

export default {
  entry: 'src/main.js',
  format: 'umd',
  moduleName: 'preactPlayground',
  plugins: [
    json(),
    babel(),
    shouldUgilfy(),
    npm({
      jsnext: true,
      main: true,
      browser: true
    })
  ],
  dest: 'public/bundle.js'
}
