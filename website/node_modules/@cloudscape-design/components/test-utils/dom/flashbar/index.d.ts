import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import FlashWrapper from './flash';
export default class FlashbarWrapper extends ComponentWrapper {
    static rootSelector: string;
    /**
     * Returns the individual flashes of this flashbar.
     *
     * If the items are stacked, only the item at the top of the stack is returned.
     */
    findItems(): Array<FlashWrapper>;
    /**
     * Returns the individual flashes of this flashbar given the item type.
     *
     * If the items are stacked, only the item at the top of the stack is returned.
     *
     * If an item is loading its type is considered as "info".
     */
    findItemsByType(type: 'success' | 'warning' | 'info' | 'error'): Array<FlashWrapper>;
    /**
     * Returns the toggle button that expands and collapses stacked notifications.
     */
    findToggleButton(): ElementWrapper<HTMLButtonElement> | null;
}
