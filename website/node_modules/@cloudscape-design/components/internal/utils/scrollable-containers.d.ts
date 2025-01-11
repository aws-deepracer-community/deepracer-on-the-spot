export interface BoundingBox {
    blockSize: number;
    inlineSize: number;
    insetBlockStart: number;
    insetInlineStart: number;
}
export declare const getOverflowParents: (element: HTMLElement) => HTMLElement[];
export declare const getOverflowParentDimensions: ({ element, excludeClosestParent, expandToViewport, canExpandOutsideViewport, }: {
    element: HTMLElement;
    excludeClosestParent: boolean;
    expandToViewport: boolean;
    canExpandOutsideViewport: boolean;
}) => BoundingBox[];
type ScrollIntoViewOptions = Parameters<HTMLElement['scrollIntoView']>[0];
/**
 * Calls `scrollIntoView` on the provided element with sensible defaults. If
 * the element does not exist or does not support the `scrollIntoView`
 * method, it will do nothing. This wrapper is created to support environments
 * where the native function is not available like JSDom (feature request:
 * https://github.com/jsdom/jsdom/issues/1422).
 *
 * @param element to be scrolled into view
 * @param options native options for `scrollIntoView`
 */
export declare function scrollElementIntoView(element: HTMLElement | undefined, options?: ScrollIntoViewOptions): void;
export declare function calculateScroll({ insetBlockStart, blockSize }: BoundingBox): number;
/**
 * For elements with fixed position, the browser's native scrollIntoView API doesn't work,
 * so we need to manually scroll to the element's position.
 * Supports only vertical scrolling.
 */
export declare function scrollRectangleIntoView(box: BoundingBox, scrollableParent?: HTMLElement): void;
export declare function getFirstScrollableParent(element: HTMLElement): HTMLElement | undefined;
export {};
//# sourceMappingURL=scrollable-containers.d.ts.map