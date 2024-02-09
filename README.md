# Bytes transformer

## Gettings started 

```
npm i bytes-transformer
```

After that we can use:

```js
import { formatBytes } from 'bytes-transformer';

const newFormat = formatBytes(5000, {'MB', 'GB'});
console.log(newFormat.amountOfCapacityBytes, newFormat.size);
```


**Try to integrate this function in *Files* prototype.**