import { PREFIXES } from './constants';
import { IFormatBytesOptions, IFormatBytesReturned, TCapacityStrength, TListOfPrefix } from './types';

/** 
  Transfer your bytes with prefix to standart bytes.
  @param {number} amount count of bytes with prefix
  @param {TListOfPrefix} from prefix
  @param {TCapacityStrength} capacityStrength capacity strength

  @returns {nubmer} nubmer of standart bytes
*/
export function formatBytesToBytes(amount: number, from: TListOfPrefix, capacityStrength: TCapacityStrength = 1024): number {
    if (typeof amount != 'number' || typeof capacityStrength != 'number' || typeof from != 'string') {
        throw new TypeError('Incorrect type!');
    }

    let result: number = amount;

    for (let i = 0; i < PREFIXES.indexOf(from); i++) {
        result *= capacityStrength;
    }

    return result;
}

/** 
  Transfer your bytes in bytes with other prefix
  @param {number} amount count of bytes with prefix
  @param {IFormatBytesOptions} options settigns for other information

  @returns {IFormatBytesReturned} object with amount and another prefix
*/
export function formatBytes(amount: number, options: IFormatBytesOptions): IFormatBytesReturned {
    if (
        typeof amount != 'number' ||
        (typeof options.capacityStrength != 'number' && typeof options.capacityStrength != 'undefined') ||
        typeof options.from != 'string' ||
        typeof options.to != 'string'
    ) {
        throw new TypeError('Incorrect type!');
    }

    if (amount === 0) {
        return {
            amount: 0,
            prefix: options.from,
        };
    }

    if (options.from === options.to) {
        return {
            amount,
            prefix: options.from,
        };
    }

    const capacityStrength: TCapacityStrength = options.capacityStrength ? options.capacityStrength : 1024;

    const bytes: number = formatBytesToBytes(amount, options.from, capacityStrength);
    let result: number = bytes;

    for (let i = 0; i < PREFIXES.indexOf(options.to); i++) {
        result /= capacityStrength;
    }

    return {
        amount: result,
        prefix: options.to,
    };
}
