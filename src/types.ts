export type TListOfPrefix = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export enum EListOfPrefix {
    'B' = 0,
    'KB' = 1,
    'MB' = 2,
    'GB' = 3,
    'TB' = 4,
}

export type TCapacityStrength = 1000 | 1024;

export interface IFormatBytesOptions {
    readonly from: EListOfPrefix;
    readonly to: EListOfPrefix;
    readonly capacityStrength?: TCapacityStrength;
}

export interface IFormatBytesReturned {
    readonly amount: number;
    readonly prefix: EListOfPrefix;
}
