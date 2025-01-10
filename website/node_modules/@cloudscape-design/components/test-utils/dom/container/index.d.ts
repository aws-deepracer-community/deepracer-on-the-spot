import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class ContainerWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findContent(): ElementWrapper;
    findMedia(): ElementWrapper;
    findFooter(): ElementWrapper | null;
}
