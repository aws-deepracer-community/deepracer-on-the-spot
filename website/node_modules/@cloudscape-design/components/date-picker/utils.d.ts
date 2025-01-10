import { CalendarProps } from '../calendar/interfaces';
export declare function isValidFullDate({ date, granularity }: {
    date: string;
    granularity: CalendarProps.Granularity;
}): boolean;
export declare function getSelectedDateLabel({ date, granularity, locale, }: {
    date: Date;
    granularity: CalendarProps.Granularity;
    locale: string;
}): string;
export declare function getBaseDateLabel({ date, granularity, locale, }: {
    date: Date;
    granularity: CalendarProps.Granularity;
    locale: string;
}): string;
//# sourceMappingURL=utils.d.ts.map