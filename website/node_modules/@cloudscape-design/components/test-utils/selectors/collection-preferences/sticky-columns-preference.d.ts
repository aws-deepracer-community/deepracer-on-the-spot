import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import RadioGroupWrapper from '../radio-group';
export default class StickyColumnsPreferenceWrapper extends ComponentWrapper {
    static firstRootSelector: string;
    static lastRootSelector: string;
    findTitle(): ElementWrapper;
    findDescription(): ElementWrapper;
    findRadioGroup(): RadioGroupWrapper;
}
