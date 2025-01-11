import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
import ButtonWrapper from '../button';
export default class FileUploadWrapper extends ComponentWrapper {
    static rootSelector: string;
    findUploadButton(): ButtonWrapper;
    findNativeInput(): ElementWrapper;
    findFileTokens(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<FileTokenWrapper>;
    /**
     * Returns a file token from for a given index.
     *
     * @param tokenIndex 1-based index of the file token to return.
     */
    findFileToken(fileTokenIndex: number): FileTokenWrapper;
    /**
     * Returns the token toggle button.
     */
    findTokenToggle(): ElementWrapper;
    findConstraint(): ElementWrapper;
    findError(): ElementWrapper;
}
declare class FileTokenWrapper extends ComponentWrapper {
    findFileName(): ElementWrapper;
    findFileSize(): ElementWrapper;
    findFileLastModified(): ElementWrapper;
    findFileThumbnail(): ElementWrapper;
    findFileError(): ElementWrapper;
    findRemoveButton(): ElementWrapper;
}
export {};
