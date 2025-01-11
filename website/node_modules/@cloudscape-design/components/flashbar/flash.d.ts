import { FlashbarProps } from './interfaces';
import React from 'react';
export declare const focusFlashById: import("../internal/utils/throttle").ThrottledFunction<(element: HTMLElement | null, itemId: string) => void>;
export interface FlashProps extends FlashbarProps.MessageDefinition {
    className: string;
    transitionState?: string;
    i18nStrings?: FlashbarProps.I18nStrings;
}
export declare const Flash: React.ForwardRefExoticComponent<FlashProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=flash.d.ts.map