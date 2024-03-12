# Bytes transform

## Getting started

```
npm i bytes-transform
```

After that, we can use:

```js
import { formatBytes } from 'bytes-transform';

const newFormat = formatBytes(1024, { from: 'MB', to: 'GB' });
console.log(newFormat.amount, newFormat.prefix);
```
