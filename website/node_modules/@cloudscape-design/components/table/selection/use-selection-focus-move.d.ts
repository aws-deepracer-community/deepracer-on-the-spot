import { KeyboardEvent } from 'react';
import { TableProps } from '../interfaces';
export declare function useSelectionFocusMove(selectionType: TableProps['selectionType'], totalItems: number): {
    moveFocusDown?: undefined;
    moveFocusUp?: undefined;
    moveFocus?: undefined;
} | {
    moveFocusDown: (event: KeyboardEvent) => void;
    moveFocusUp: (event: KeyboardEvent) => void;
    moveFocus: (sourceElement: HTMLElement, fromIndex: number, direction: -1 | 1) => void;
};
//# sourceMappingURL=use-selection-focus-move.d.ts.map