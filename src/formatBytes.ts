import { IFormatBytesOptions, IFormatBytesReturned, TCapacityStrength, EListOfPrefix } from './types';

/** 
  Transfer your bytes with prefix to standart bytes.
  @param {number} amount count of bytes with prefix
  @param {EListOfPrefix} from prefix
  @param {TCapacityStrength} capacityStrength capacity strength

  @returns {nubmer} nubmer of standart bytes
*/
export function formatBytesToBytes(amount: number, from: EListOfPrefix, capacityStrength: TCapacityStrength = 1024): number {
    let result: number = amount;

    for (let i = 0; i < from; i++) {
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

    for (let i = 0; i < options.to; i++) {
        result /= capacityStrength;
    }

    return {
        amount: result,
        prefix: options.to,
    };
}
