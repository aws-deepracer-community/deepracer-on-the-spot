import { ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
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
    }): CalendarWrapper;
    findCalendarDropdown(): ElementWrapper;
    findOpenCalendarButton(): ButtonWrapper;
}
