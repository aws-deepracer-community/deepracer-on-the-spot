import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
import ButtonWrapper from '../button';
export default class FileUploadWrapper extends ComponentWrapper<HTMLElement> {
    static rootSelector: string;
    findUploadButton(): ButtonWrapper;
    findNativeInput(): ElementWrapper<HTMLInputElement>;
    findFileTokens(): Array<FileTokenWrapper>;
    /**
     * Returns a file token from for a given index.
     *
     * @param tokenIndex 1-based index of the file token to return.
     */
    findFileToken(fileTokenIndex: number): null | FileTokenWrapper;
    /**
     * Returns the token toggle button.
     */
    findTokenToggle(): null | ElementWrapper;
    findConstraint(): null | ElementWrapper;
    findError(): null | ElementWrapper;
}
declare class FileTokenWrapper extends ComponentWrapper {
    findFileName(): ElementWrapper;
    findFileSize(): null | ElementWrapper;
    findFileLastModified(): null | ElementWrapper;
    findFileThumbnail(): null | ElementWrapper;
    findFileError(): null | ElementWrapper;
    findRemoveButton(): ElementWrapper;
}
export {};
