import React from 'react';
import { FormFieldValidationControlProps } from '../../context/form-field-context';
import { BaseComponentProps } from '../../base-component';
import { NonCancelableEventHandler } from '../../events';
import { BaseChangeDetail, BaseInputProps, InputAutoCorrect, InputClearLabel, InputKeyEvents } from '../../../input/interfaces';
import { AutosuggestProps } from '../../../autosuggest/interfaces';
import { ExpandToViewport } from '../dropdown/interfaces';
import { InternalBaseComponentProps } from '../../hooks/use-base-component';
export interface AutosuggestInputProps extends BaseComponentProps, BaseInputProps, InputAutoCorrect, InputKeyEvents, InputClearLabel, FormFieldValidationControlProps, ExpandToViewport, InternalBaseComponentProps {
    ariaControls?: string;
    ariaActivedescendant?: string;
    dropdownExpanded?: boolean;
    dropdownContentKey?: string;
    dropdownContentFocusable?: boolean;
    dropdownContent?: React.ReactNode;
    dropdownFooter?: React.ReactNode;
    dropdownWidth?: number;
    loopFocus?: boolean;
    onCloseDropdown?: NonCancelableEventHandler<null>;
    onDelayedInput?: NonCancelableEventHandler<BaseChangeDetail>;
    onPressArrowDown?: () => void;
    onPressArrowUp?: () => void;
    onPressEnter?: () => boolean;
}
export interface AutosuggestInputFocusOptions {
    preventDropdown?: boolean;
}
export interface AutosuggestInputRef extends AutosuggestProps.Ref {
    focus(options?: AutosuggestInputFocusOptions): void;
    open(): void;
    close(): void;
}
declare const AutosuggestInput: React.ForwardRefExoticComponent<AutosuggestInputProps & React.RefAttributes<AutosuggestInputRef>>;
export default AutosuggestInput;
//# sourceMappingURL=index.d.ts.map