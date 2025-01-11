import { TableProps } from '../interfaces';
export declare const SELECTION_ITEM = "selection-item";
export declare const SELECTION_ROOT = "selection-root";
export declare class ItemSet<T> {
    constructor(trackBy: TableProps.TrackBy<T> | undefined, items: ReadonlyArray<T>);
    private trackBy;
    private map;
    put: (item: T) => Map<unknown, T>;
    has: (item: T) => boolean;
    forEach: (callbackfn: (value: T, key: unknown, map: Map<unknown, T>) => void, thisArg?: any) => void;
}
export declare const focusMarkers: {
    item: {
        [x: string]: string;
    };
    all: {
        [x: string]: string;
    };
    root: {
        [x: string]: string;
    };
};
//# sourceMappingURL=utils.d.ts.map