import { DateRangePickerProps } from '../../../date-range-picker/interfaces';
export declare function formatDateRange({ startDate, endDate, timeOffset, hideTimeOffset, format, locale, }: {
    startDate: string;
    endDate: string;
    hideTimeOffset?: boolean;
    timeOffset: {
        startDate?: number;
        endDate?: number;
    };
    format: DateRangePickerProps.AbsoluteFormat;
    locale?: string;
}): string;
//# sourceMappingURL=format-date-range.d.ts.map