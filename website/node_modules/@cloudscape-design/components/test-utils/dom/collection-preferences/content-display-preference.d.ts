import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ToggleWrapper from '../toggle';
export declare class ContentDisplayOptionWrapper extends ComponentWrapper {
    /**
     * Returns the drag handle for the option item.
     */
    findDragHandle(): ElementWrapper;
    /**
     * Returns the text label displayed in the option item.
     */
    findLabel(): ElementWrapper;
    /**
     * Returns the visibility toggle for the option item.
     */
    findVisibilityToggle(): ToggleWrapper;
}
export default class ContentDisplayPreferenceWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns the title.
     */
    findTitle(): ElementWrapper;
    /**
     * Returns the preference description displayed below the title.
     */
    findDescription(): ElementWrapper;
    /**
     * Returns an option for a given index.
     *
     * @param index 1-based index of the option to return.
     */
    findOptionByIndex(index: number): ContentDisplayOptionWrapper | null;
    /**
     * Returns options that the user can reorder.
     */
    findOptions(): Array<ContentDisplayOptionWrapper>;
}
