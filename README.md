# Bytes transform

## Getting started

```
npm i bytes-transform
```

After that, we can use:

```js
import { formatBytes } from 'bytes-transform';

const newFormat = formatBytes(1024, {'MB', 'GB'});
console.log(newFormat.amount, newFormat.prefix);
```
