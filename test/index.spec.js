const pluginTester = require('babel-plugin-tester');
const plugin = require('..');
const path = require('path');

pluginTester({
  plugin,
  babelOptions: {
    plugins: ['@babel/plugin-syntax-dynamic-import']
  },
  fixtures: path.join(__dirname, 'fixtures')
});
