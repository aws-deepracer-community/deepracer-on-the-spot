import React from 'react';
export type NonCancelableEventHandler<Detail = {}> = (event: NonCancelableCustomEvent<Detail>) => void;
export type CancelableEventHandler<Detail = {}> = (event: CustomEvent<Detail>) => void;
export type NonCancelableCustomEvent<DetailType> = Omit<CustomEvent<DetailType>, 'preventDefault'>;
export interface BaseKeyDetail {
    keyCode: number;
    key: string;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
}
export interface ClickDetail {
    button: number;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
}
export interface BaseNavigationDetail {
    href: string | undefined;
    external?: boolean;
    target?: string;
}
export declare function createCustomEvent<T>({ cancelable, detail }: CustomEventInit<T>): CustomEvent<T>;
export declare function fireNonCancelableEvent<T = null>(handler: NonCancelableEventHandler<T> | undefined, detail?: T): void;
export declare function fireCancelableEvent<T>(handler: CancelableEventHandler<T> | undefined, detail: T, sourceEvent?: React.SyntheticEvent | Event): boolean;
export declare function fireKeyboardEvent(handler: CancelableEventHandler<BaseKeyDetail>, reactEvent: React.KeyboardEvent): boolean;
export declare function hasModifierKeys(event: React.MouseEvent | React.KeyboardEvent): boolean;
export declare function isPlainLeftClick(event: React.MouseEvent | React.KeyboardEvent): boolean;
//# sourceMappingURL=index.d.ts.map