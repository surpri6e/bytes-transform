export type TListOfPrefix = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

export type TCapacityStrength = 1000 | 1024;

export interface IFormatBytesOptions {
    readonly from: TListOfPrefix;
    readonly to: TListOfPrefix;
    readonly capacityStrength?: TCapacityStrength;
}

export interface IFormatBytesReturned {
    readonly amount: number;
    readonly prefix: TListOfPrefix;
}
