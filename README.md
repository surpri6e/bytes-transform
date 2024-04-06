[![npm version](https://img.shields.io/npm/v/bytes-transform.svg?style=flat-square)](https://www.npmjs.org/package/bytes-transform)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=bytes-transform&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=bytes-transform)
[![npm downloads](https://img.shields.io/npm/dy/bytes-transform.svg?style=flat-square)](https://npm-stat.com/charts.html?package=bytes-transform)

# Bytes transform

## Getting started

```
npm i bytes-transform
```

### ECMAScript

After that, we can use:

```js
import { formatBytes } from 'bytes-transform';

const newFormat = formatBytes(1024, { from: 'MB', to: 'GB' });
console.log(newFormat.amount, newFormat.prefix);
```

Since the object is returned we can use this syntax:

```js
formatBytes(1024, { from: 'MB', to: 'GB' }).amount; // 1
formatBytes(1024, { from: 'MB', to: 'GB' }).prefix; // 'GB'
```

If you need you can convert everything to bytes:

```js
import { formatBytesToBytes } from 'bytes-transform';

formatBytesToBytes(1024, 'MB')) // return -> 1073741824 bytes
formatBytesToBytes(4, 'MB')) // return -> 4194304 bytes
```

### CommonJs

All that you can use with CommonJs:

```js
const { formatBytes, formatBytesToBytes } = require('bytes-transform');

...
```

## All structures

### formatBytesToBytes

```ts
/**
Transfer your bytes with prefix to standart bytes.
@param {number} amount count of bytes with prefix
@param {TListOfPrefix} from prefix
@param {TCapacityStrength} capacityStrength capacity strength

@returns {number} number of standart bytes
*/
export function formatBytesToBytes(amount: number, from: TListOfPrefix, capacityStrength: TCapacityStrength = 1024): number;
```

### formatBytes

```ts
/**
  Transfer your bytes in bytes with other prefix
  @param {number} amount count of bytes with prefix
  @param {IFormatBytesOptions} options settigns for other information

  @returns {IFormatBytesReturned} object with amount and another prefix
*/
export function formatBytes(amount: number, options: IFormatBytesOptions): IFormattedBytes;
```

### TListOfPrefix

```ts
export type TListOfPrefix = 'B' | 'KB' | 'MB' | 'GB' | 'TB';
```

### TCapacityStrength

```ts
export type TCapacityStrength = 1000 | 1024;
```

### TFixTo

```ts
export type TFixTo = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
```

### IFormatBytesOptions

```ts
export interface IFormatBytesOptions {
    readonly from: TListOfPrefix;
    readonly to: TListOfPrefix;
    readonly capacityStrength?: TCapacityStrength;
    readonly fixTo?: TFixTo;
}
```

### IFormattedBytes

```ts
export interface IFormattedBytes {
    readonly amount: number;
    readonly prefix: TListOfPrefix;
}
```

Happy hacking!
