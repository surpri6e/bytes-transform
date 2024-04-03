import { PREFIXES } from './constants';
import { formatBytesToBytes } from './formatBytesToBytes';
import { IFormatBytesOptions, TCapacityStrength, IFormattedBytes } from './types';

type TFormatBytesSignature = (amount: number, options: IFormatBytesOptions) => IFormattedBytes;

/** 
  Transfer your bytes in bytes with other prefix
  @param {number} amount count of bytes with prefix
  @param {IFormatBytesOptions} options settigns for other information

  @returns {IFormattedBytes} object with amount and another prefix
*/
export const formatBytes: TFormatBytesSignature = (amount, options) => {
    if (typeof amount != 'number') {
        throw new TypeError('Amount is need be number.');
    }

    if (typeof options.capacityStrength != 'number' && typeof options.capacityStrength != 'undefined') {
        throw new TypeError('CapacityStrength is need be number.');
    }

    if (typeof options.fixTo != 'number' && typeof options.fixTo != 'undefined') {
        throw new TypeError('FixTo is need be number.');
    }

    if (options.from != 'B' && options.from != 'KB' && options.from != 'MB' && options.from != 'GB' && options.from != 'TB') {
        throw new TypeError('Options.from is need be "B" or "KB" or "MB" or "GB" or "TB".');
    }

    if (options.to != 'B' && options.to != 'KB' && options.to != 'MB' && options.to != 'GB' && options.to != 'TB') {
        throw new TypeError('Options.to is need be "B" or "KB" or "MB" or "GB" or "TB".');
    }

    if (amount === 0) {
        const returned: IFormattedBytes = {
            amount: 0,
            prefix: options.from,
        } as const;

        return returned;
    }

    if (options.from === options.to) {
        const returned: IFormattedBytes = {
            amount: typeof options.fixTo === 'number' ? Number(amount.toFixed(options.fixTo)) : amount,
            prefix: options.from,
        } as const;

        return returned;
    }

    const capacityStrength: TCapacityStrength = options.capacityStrength ? options.capacityStrength : 1024;

    const bytes: number = formatBytesToBytes(amount, options.from, capacityStrength);

    let result: number = bytes;

    for (let i = 0; i < PREFIXES.indexOf(options.to); i++) {
        result /= capacityStrength;
    }

    const returned: IFormattedBytes = {
        amount: typeof options.fixTo === 'number' ? Number(result.toFixed(options.fixTo)) : result,
        prefix: options.to,
    } as const;

    return returned;
};
