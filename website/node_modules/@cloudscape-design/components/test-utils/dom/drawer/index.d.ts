import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class DrawerWrapper extends ComponentWrapper {
    static rootSelector: string;
    findHeader(): ElementWrapper | null;
    findContent(): ElementWrapper | null;
}
