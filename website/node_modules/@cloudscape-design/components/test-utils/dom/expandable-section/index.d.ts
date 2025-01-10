import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ExpandableSectionWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper;
    findContent(): ElementWrapper;
    findExpandButton(): ElementWrapper;
    findExpandedContent(): ElementWrapper | null;
    findExpandIcon(): ElementWrapper;
    findHeaderText(): ElementWrapper | null;
    findHeaderDescription(): ElementWrapper | null;
}
