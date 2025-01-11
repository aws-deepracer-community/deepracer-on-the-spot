import { ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import InputWrapper from '../input';
import DropdownHostComponentWrapper from '../internal/dropdown-host';
export default class SelectWrapper extends DropdownHostComponentWrapper {
    static rootSelector: string;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findErrorRecoveryButton(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findStatusIndicator(options?: {
        expandToViewport: boolean;
    }): ElementWrapper | null;
    /**
     * Returns the input that is used for filtering.
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findFilteringInput(options?: {
        expandToViewport: boolean;
    }): InputWrapper | null;
    findPlaceholder(): ElementWrapper | null;
    findTrigger(): ElementWrapper;
    isDisabled(): boolean;
}
