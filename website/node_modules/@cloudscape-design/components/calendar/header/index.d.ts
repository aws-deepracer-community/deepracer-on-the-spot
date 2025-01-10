/// <reference types="react" />
interface CalendarHeaderProps {
    formattedDate: string;
    onChange: (n: number) => void;
    previousLabel?: string;
    nextLabel?: string;
    headingId: string;
}
declare const CalendarHeader: ({ formattedDate, onChange, previousLabel, nextLabel, headingId }: CalendarHeaderProps) => JSX.Element;
export default CalendarHeader;
//# sourceMappingURL=index.d.ts.map