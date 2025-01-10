import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
import CalendarWrapper from '../calendar';
import BaseInputWrapper from '../input/base-input';
export default class DatePickerWrapper extends BaseInputWrapper {
    static rootSelector: string;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findCalendar(options?: {
        expandToViewport: boolean;
    }): CalendarWrapper | null;
    findCalendarDropdown(): ElementWrapper | null;
    findOpenCalendarButton(): ButtonWrapper;
    /**
     * Sets the value of the component and calls the `onChange` handler.
     * The value needs to use the "YYYY/MM/DD" format,
     * but the subsequent `onChange` handler will contain the value in the "YYYY-MM-DD" format.
     *
     * @param value The value the input is set to, using the "YYYY/MM/DD" format.
     */
    setInputValue(value: string): void;
}
