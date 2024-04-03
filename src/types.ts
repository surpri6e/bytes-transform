export type TListOfPrefix = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export type TCapacityStrength = 1000 | 1024;
export type TFixTo = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface IFormatBytesOptions {
    readonly from: TListOfPrefix;
    readonly to: TListOfPrefix;
    readonly capacityStrength?: TCapacityStrength;
    readonly fixTo?: TFixTo;
}

export interface IFormattedBytes {
    readonly amount: number;
    readonly prefix: TListOfPrefix;
}
