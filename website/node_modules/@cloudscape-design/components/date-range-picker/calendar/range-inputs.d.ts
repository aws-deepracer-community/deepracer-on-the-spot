/// <reference types="react" />
import { BaseComponentProps } from '../../internal/base-component';
import { RangeCalendarI18nStrings } from '../interfaces';
import { TimeInputProps } from '../../time-input/interfaces';
type I18nStrings = Pick<RangeCalendarI18nStrings, 'dateTimeConstraintText' | 'startDateLabel' | 'startTimeLabel' | 'endDateLabel' | 'endTimeLabel'>;
export interface RangeInputsProps extends BaseComponentProps {
    startDate: string;
    onChangeStartDate: (value: string) => void;
    startTime: string;
    onChangeStartTime: (value: string) => void;
    endDate: string;
    onChangeEndDate: (value: string) => void;
    endTime: string;
    onChangeEndTime: (value: string) => void;
    i18nStrings?: I18nStrings;
    dateOnly: boolean;
    timeInputFormat: TimeInputProps.Format;
}
export default function RangeInputs({ startDate, onChangeStartDate, startTime, onChangeStartTime, endDate, onChangeEndDate, endTime, onChangeEndTime, i18nStrings, dateOnly, timeInputFormat, }: RangeInputsProps): JSX.Element;
export {};
//# sourceMappingURL=range-inputs.d.ts.map