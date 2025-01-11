import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class TextareaWrapper extends ComponentWrapper<HTMLTextAreaElement> {
    static rootSelector: string;
    findNativeTextarea(): ElementWrapper<HTMLTextAreaElement>;
    /**
     * Gets the value of the component.
     *
     * Returns the current value of the textarea.
     */
    getTextareaValue(): string;
    /**
     * Sets the value of the component and calls the onChange handler.
     *
     * @param value value to set the textarea to.
     */
    setTextareaValue(value: string): void;
}
