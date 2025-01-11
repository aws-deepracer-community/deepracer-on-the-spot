import { KeyboardEventHandler } from 'react';
import { SelectionProps } from './interfaces';
export interface SelectionControlProps extends SelectionProps {
    onShiftToggle?(shiftPressed: boolean): void;
    onFocusUp?: KeyboardEventHandler;
    onFocusDown?: KeyboardEventHandler;
    ariaLabel?: string;
    tabIndex?: -1;
    focusedComponent?: null | string;
}
export declare function SelectionControl({ selectionType, indeterminate, onShiftToggle, onFocusUp, onFocusDown, name, ariaLabel, focusedComponent, ...sharedProps }: SelectionControlProps): JSX.Element;
//# sourceMappingURL=selection-control.d.ts.map