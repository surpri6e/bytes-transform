export type TListOfSizes = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export enum EListOfSizes {
    'B' = 0,
    'KB' = 1,
    'MB' = 2,
    'GB' = 3,
    'TB' = 4,
}

export type TCapacityStrength = 1000 | 1024;

export interface IFormatBytesOptions {
    from: EListOfSizes;
    to: EListOfSizes;
    capacityStrength?: TCapacityStrength;
}

export interface IFormatBytesReturned {
    amountOfCapacityBytes: number;
    size: EListOfSizes;
}