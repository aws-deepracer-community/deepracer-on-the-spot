import React from 'react';
import { DateRangePickerProps, DayIndex } from '../../interfaces';
export interface GridProps {
    baseDate: Date;
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
    focusedDate: Date | null;
    onFocusedDateChange: React.Dispatch<React.SetStateAction<Date | null>>;
    isDateEnabled: DateRangePickerProps.IsDateEnabledFunction;
    isSingleGrid: boolean;
    onSelectDate: (date: Date) => void;
    onChangeMonth: (date: Date) => void;
    locale: string;
    startOfWeek: DayIndex;
    todayAriaLabel?: string;
    headingIdPrefix: string;
}
export declare const Grids: ({ baseDate, selectedStartDate, selectedEndDate, focusedDate, onFocusedDateChange, isDateEnabled, isSingleGrid, onSelectDate, onChangeMonth, locale, startOfWeek, todayAriaLabel, headingIdPrefix, }: GridProps) => JSX.Element;
//# sourceMappingURL=index.d.ts.map