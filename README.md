# babel-plugin-import-chunkname

```
npm install @jxz/babel-plugin-import-chunkname
```

use it in .babelrc

```
{
  "plugins": [
    "@jxz/babel-plugin-import-chunkname"
  ]
}
```

transpile 
```
import('./page/About')
```
to
```
import(/*  webpackChunkName: 'About'  */ './page/About')
```
