import { CalendarProps } from './interfaces';
export default function useCalendarLabels({ granularity, locale, i18nStrings, previousMonthAriaLabel, nextMonthAriaLabel, todayAriaLabel, }: {
    granularity: CalendarProps.Granularity;
    locale: string;
    i18nStrings?: CalendarProps.I18nStrings;
    previousMonthAriaLabel?: string;
    nextMonthAriaLabel?: string;
    previousYearAriaLabel?: string;
    todayAriaLabel?: string;
}): {
    previousButtonLabel: string | undefined;
    nextButtonLabel: string | undefined;
    renderDate: (date: Date) => string;
    renderDateAnnouncement: (date: Date, isCurrentDate: boolean) => string;
    renderHeaderText: (date: Date) => string;
};
//# sourceMappingURL=use-calendar-labels.d.ts.map