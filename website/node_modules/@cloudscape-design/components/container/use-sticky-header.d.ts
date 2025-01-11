import { RefObject } from 'react';
interface StickyHeaderContextProps {
    isStuck: boolean;
}
interface ComputeOffsetProps {
    isMobile: boolean;
    isVisualRefresh: boolean;
    customCssProps: Record<string, string>;
    __stickyOffset?: number;
    __mobileStickyOffset?: number;
    mobileBarHeight?: number;
    stickyOffsetTop: number;
    hasInnerOverflowParents: boolean;
}
export declare function computeOffset({ isMobile, isVisualRefresh, customCssProps, __stickyOffset, __mobileStickyOffset, mobileBarHeight, stickyOffsetTop, hasInnerOverflowParents, }: ComputeOffsetProps): string;
export declare const StickyHeaderContext: import("react").Context<StickyHeaderContextProps>;
export declare const useStickyHeader: (rootRef: RefObject<HTMLDivElement>, headerRef: RefObject<HTMLDivElement>, __stickyHeader?: boolean, __stickyOffset?: number, __mobileStickyOffset?: number, __disableMobile?: boolean) => {
    isSticky: boolean;
    isStuck: boolean;
    stickyStyles: {
        style: {
            top: string;
        };
    } | {
        style?: undefined;
    };
};
export {};
//# sourceMappingURL=use-sticky-header.d.ts.map