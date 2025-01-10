/// <reference types="react" />
import { DateRangePickerProps } from './interfaces';
export declare const VALID_RANGE: DateRangePickerProps.ValidRangeResult;
export interface DateRangePickerDropdownProps extends Pick<Required<DateRangePickerProps>, 'locale' | 'isDateEnabled' | 'isValidRange' | 'value' | 'relativeOptions' | 'showClearButton' | 'dateOnly' | 'timeInputFormat' | 'rangeSelectorMode'> {
    onClear: () => void;
    onApply: (value: null | DateRangePickerProps.Value) => DateRangePickerProps.ValidationResult;
    startOfWeek: number | undefined;
    onDropdownClose: () => void;
    isSingleGrid: boolean;
    i18nStrings?: DateRangePickerProps.I18nStrings;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    customAbsoluteRangeControl: DateRangePickerProps.AbsoluteRangeControl | undefined;
}
export declare function DateRangePickerDropdown({ locale, startOfWeek, isDateEnabled, isValidRange, value, onClear: clearValue, onApply: applyValue, onDropdownClose, relativeOptions, showClearButton, isSingleGrid, i18nStrings, dateOnly, timeInputFormat, rangeSelectorMode, ariaLabelledby, ariaDescribedby, customAbsoluteRangeControl, }: DateRangePickerDropdownProps): JSX.Element;
//# sourceMappingURL=dropdown.d.ts.map