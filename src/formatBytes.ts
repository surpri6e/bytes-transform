import { EListOfSizes, IFormatBytesOptions, IFormatBytesReturned, TCapacityStrength } from './types';

/** 
  Transfer your capacity butes to standart bytes.
  @param {number} amountOfCapacityBytes count of capacity bytes
  @param {EListOfSizes} from size of capacity bytes
  @param {TCapacityStrength} capacityStrength capacity strength

  @returns {nubmer} nubmer of standart bytes
*/
export function formatBytesToBytes(amountOfCapacityBytes: number, from: EListOfSizes, capacityStrength: TCapacityStrength = 1024): number {
  let result: number = amountOfCapacityBytes;

  for(let i = 0; i < from; i++) {
    result *= capacityStrength;
  }

  return result;
}


/** 
  Transfer your bytes in other capacity
  @param {number} amountOfCapacityBytes count of capacity bytes
  @param {IFormatBytesOptions} options settigns for this function

  @returns {IFormatBytesReturned} object whit count of capacity bytes and size
*/
export function formatBytes(amountOfCapacityBytes: number, options: IFormatBytesOptions): IFormatBytesReturned {
  if(amountOfCapacityBytes === 0) {
    return {
      amountOfCapacityBytes: 0,
      size: options.from,
    }
  }

  if(options.from === options.to) {
    return {
      amountOfCapacityBytes: amountOfCapacityBytes,
      size: options.from,
    }
  }

  const capacityStrength: TCapacityStrength = options.capacityStrength ? options.capacityStrength : 1024;

  const bytes: number = formatBytesToBytes(amountOfCapacityBytes, options.from, capacityStrength);
  let result: number = bytes;

   for(let i = 0; i < options.to; i++) {
    result /= capacityStrength;
  }

  return {
    amountOfCapacityBytes: result,
    size: options.to,
  }
}

