import { CalendarProps } from '../interfaces.js';
export default function useCalendarGridRows({ baseDate, granularity, locale, startOfWeek, }: {
    baseDate: Date;
    granularity: CalendarProps.Granularity;
    locale: string;
    startOfWeek?: number;
}): Date[][];
//# sourceMappingURL=use-calendar-grid-rows.d.ts.map