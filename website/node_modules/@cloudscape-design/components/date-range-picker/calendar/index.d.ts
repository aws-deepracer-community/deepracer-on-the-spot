import React from 'react';
import { BaseComponentProps } from '../../internal/base-component';
import { DateRangePickerProps, RangeCalendarI18nStrings } from '../interfaces';
import { TimeInputProps } from '../../time-input/interfaces';
export interface DateRangePickerCalendarProps extends BaseComponentProps {
    value: DateRangePickerProps.PendingAbsoluteValue;
    setValue: React.Dispatch<React.SetStateAction<DateRangePickerProps.PendingAbsoluteValue>>;
    locale?: string;
    startOfWeek?: number;
    isDateEnabled?: (date: Date) => boolean;
    i18nStrings?: RangeCalendarI18nStrings;
    dateOnly?: boolean;
    timeInputFormat?: TimeInputProps.Format;
    customAbsoluteRangeControl: DateRangePickerProps.AbsoluteRangeControl | undefined;
}
export default function DateRangePickerCalendar({ value, setValue, locale, startOfWeek, isDateEnabled, i18nStrings, dateOnly, timeInputFormat, customAbsoluteRangeControl, }: DateRangePickerCalendarProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map