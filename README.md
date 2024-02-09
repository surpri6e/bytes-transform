# Bytes transform

## Getting started 

```
npm i bytes-transform
```

After that we can use:

```js
import { formatBytes } from 'bytes-transform';

const newFormat = formatBytes(5000, {'MB', 'GB'});
console.log(newFormat.amountOfCapacityBytes, newFormat.size);
```


**Try to integrate this function in *Files* prototype.**