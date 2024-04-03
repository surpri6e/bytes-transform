import { PREFIXES } from './constants';
import { TCapacityStrength, TListOfPrefix } from './types';

type TFormatBytesToBytesSignature = (amount: number, from: TListOfPrefix, capacityStrength: TCapacityStrength) => number;

/** 
  Transfer your bytes with prefix to standart bytes.
  @param {number} amount count of bytes with prefix
  @param {TListOfPrefix} from prefix
  @param {TCapacityStrength} capacityStrength capacity strength

  @returns {number} number of standart bytes
*/
export const formatBytesToBytes: TFormatBytesToBytesSignature = (amount, from, capacityStrength = 1024) => {
    if (typeof amount != 'number' || typeof capacityStrength != 'number') {
        throw new TypeError('Amount or capacityStrength are need be number.');
    }

    if (from != 'B' && from != 'KB' && from != 'MB' && from != 'GB' && from != 'TB') {
        throw new TypeError('Second parameter(from) is need be "B" or "KB" or "MB" or "GB" or "TB".');
    }

    let result: number = amount;

    for (let i = 0; i < PREFIXES.indexOf(from); i++) {
        result *= capacityStrength;
    }

    return result;
};
