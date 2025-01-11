import { ComponentWrapper, ElementWrapper } from '@cloudscape-design/test-utils-core/dom';
export default class AnchorNavigationWrapper extends ComponentWrapper {
    static rootSelector: string;
    findAnchorNavigation(): ElementWrapper<HTMLOListElement> | null;
    findAnchorNavigationList(): ElementWrapper<HTMLOListElement> | null;
    findAnchors(): Array<AnchorItemWrapper>;
    findAnchorByIndex(index: number): AnchorItemWrapper | null;
    findActiveAnchor(): AnchorItemWrapper | null;
    findAnchorLinkByHref(href: string): ElementWrapper<HTMLAnchorElement> | null;
}
export declare class AnchorItemWrapper extends ElementWrapper {
    findLink(): ElementWrapper<HTMLAnchorElement> | null;
    findText(): ElementWrapper | null;
    findInfo(): ElementWrapper | null;
    isActive(): boolean;
}
