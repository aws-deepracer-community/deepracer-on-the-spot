/// <reference types="react" />
interface HeaderButtonProps {
    ariaLabel?: string;
    baseDate: Date;
    onChangeMonth: (date: Date) => void;
}
export declare function PrevMonthButton({ ariaLabel, baseDate, onChangeMonth }: HeaderButtonProps): JSX.Element;
export declare function NextMonthButton({ ariaLabel, baseDate, onChangeMonth }: HeaderButtonProps): JSX.Element;
export {};
//# sourceMappingURL=header-button.d.ts.map