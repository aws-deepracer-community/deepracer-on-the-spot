/// <reference types="react" />
interface CalendarHeaderProps {
    baseDate: Date;
    locale: string;
    onChangeMonth: (date: Date) => void;
    previousMonthLabel?: string;
    nextMonthLabel?: string;
    isSingleGrid: boolean;
    headingIdPrefix: string;
}
export default function CalendarHeader({ baseDate, locale, onChangeMonth, previousMonthLabel, nextMonthLabel, isSingleGrid, headingIdPrefix, }: CalendarHeaderProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map