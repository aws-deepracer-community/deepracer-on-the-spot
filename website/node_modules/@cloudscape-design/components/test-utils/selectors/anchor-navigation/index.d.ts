import { ComponentWrapper, ElementWrapper } from "@cloudscape-design/test-utils-core/selectors";
export default class AnchorNavigationWrapper extends ComponentWrapper {
    static rootSelector: string;
    findAnchorNavigation(): ElementWrapper;
    findAnchorNavigationList(): ElementWrapper;
    findAnchors(): import("@cloudscape-design/test-utils-core/selectors").MultiElementWrapper<AnchorItemWrapper>;
    findAnchorByIndex(index: number): AnchorItemWrapper;
    findActiveAnchor(): AnchorItemWrapper;
    findAnchorLinkByHref(href: string): ElementWrapper;
}
export declare class AnchorItemWrapper extends ElementWrapper {
    findLink(): ElementWrapper;
    findText(): ElementWrapper;
    findInfo(): ElementWrapper;
}
