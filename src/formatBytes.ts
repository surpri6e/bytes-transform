import { PREFIXES } from './constants';
import { IFormatBytesOptions, IFormatBytesReturned, TCapacityStrength, TListOfPrefix } from './types';

/** 
  Transfer your bytes with prefix to standart bytes.
  @param {number} amount count of bytes with prefix
  @param {TListOfPrefix} from prefix
  @param {TCapacityStrength} capacityStrength capacity strength

  @returns {number} number of standart bytes
*/
export function formatBytesToBytes(amount: number, from: TListOfPrefix, capacityStrength: TCapacityStrength = 1024): number {
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
}

/** 
  Transfer your bytes in bytes with other prefix
  @param {number} amount count of bytes with prefix
  @param {IFormatBytesOptions} options settigns for other information

  @returns {IFormatBytesReturned} object with amount and another prefix
*/
export function formatBytes(amount: number, options: IFormatBytesOptions): IFormatBytesReturned {
    if (typeof amount != 'number') {
        throw new TypeError('Amount is need be number.');
    }

    if (typeof options.capacityStrength != 'number' && typeof options.capacityStrength != 'undefined') {
        throw new TypeError('CapacityStrength is need be number.');
    }

    if (options.from != 'B' && options.from != 'KB' && options.from != 'MB' && options.from != 'GB' && options.from != 'TB') {
        throw new TypeError('Options.from is need be "B" or "KB" or "MB" or "GB" or "TB".');
    }

    if (options.to != 'B' && options.to != 'KB' && options.to != 'MB' && options.to != 'GB' && options.to != 'TB') {
        throw new TypeError('Options.to is need be "B" or "KB" or "MB" or "GB" or "TB".');
    }

    if (amount === 0) {
        const returned: IFormatBytesReturned = {
            amount: 0,
            prefix: options.from,
        };
        Object.freeze(returned);
        return returned;
    }

    if (options.from === options.to) {
        const returned: IFormatBytesReturned = {
            amount,
            prefix: options.from,
        };
        Object.freeze(returned);
        return returned;
    }

    const capacityStrength: TCapacityStrength = options.capacityStrength ? options.capacityStrength : 1024;

    const bytes: number = formatBytesToBytes(amount, options.from, capacityStrength);
    let result: number = bytes;

    for (let i = 0; i < PREFIXES.indexOf(options.to); i++) {
        result /= capacityStrength;
    }

    const returned: IFormatBytesReturned = {
        amount: result,
        prefix: options.to,
    };

    Object.freeze(returned);
    return returned;
}
