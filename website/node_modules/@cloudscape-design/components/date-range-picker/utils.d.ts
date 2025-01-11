import { DateRangePickerProps } from './interfaces';
export declare function formatValue(value: null | DateRangePickerProps.Value, { timeOffset, dateOnly }: {
    timeOffset: {
        startDate?: number;
        endDate?: number;
    };
    dateOnly: boolean;
}): null | DateRangePickerProps.Value;
export declare function getDefaultMode(value: null | DateRangePickerProps.Value, relativeOptions: readonly DateRangePickerProps.RelativeOption[], rangeSelectorMode: DateRangePickerProps.RangeSelectorMode): "absolute" | "relative";
export declare function splitAbsoluteValue(value: null | DateRangePickerProps.AbsoluteValue): DateRangePickerProps.PendingAbsoluteValue;
export declare function joinAbsoluteValue(value: DateRangePickerProps.PendingAbsoluteValue): DateRangePickerProps.AbsoluteValue;
//# sourceMappingURL=utils.d.ts.map