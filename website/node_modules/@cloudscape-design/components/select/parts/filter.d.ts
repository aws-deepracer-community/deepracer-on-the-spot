import React from 'react';
import { InternalInputProps } from '../../input/internal';
import { SelectProps } from '../interfaces';
export interface FilterProps extends InternalInputProps {
    ref?: React.Ref<HTMLInputElement>;
    filteringType: SelectProps.FilteringType;
}
declare const Filter: React.ForwardRefExoticComponent<Pick<FilterProps, "disabled" | "autoComplete" | "autoFocus" | "name" | "className" | "id" | "placeholder" | "inputMode" | "type" | "readOnly" | "step" | "value" | "onFocus" | "onBlur" | "onChange" | "onKeyDown" | "onKeyUp" | "invalid" | "__internalRootRef" | "ariaLabel" | "ariaDescribedby" | "__nativeAttributes" | "clearAriaLabel" | "ariaLabelledby" | "controlId" | "filteringType" | "ariaRequired" | "disableBrowserAutocorrect" | "spellcheck" | "__leftIcon" | "__leftIconVariant" | "__onLeftIconClick" | "__rightIcon" | "__onRightIconClick" | "__noBorderRadius" | "__onDelayedInput" | "__onBlurWithDetail" | "__inheritFormFieldProps"> & React.RefAttributes<HTMLInputElement>>;
export default Filter;
//# sourceMappingURL=filter.d.ts.map