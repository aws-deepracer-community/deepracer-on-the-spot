import { Coordinates } from '@dnd-kit/utilities';
export declare function getScrollPosition(scrollingContainer: Element): {
    isTop: boolean;
    isLeft: boolean;
    isBottom: boolean;
    isRight: boolean;
    maxScroll: {
        x: number;
        y: number;
    };
    minScroll: {
        x: number;
        y: number;
    };
};
export declare function getScrollElementRect(element: Element): {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};
export declare function applyScroll({ currentCoordinates, direction, newCoordinates, scrollableAncestors, }: {
    currentCoordinates: Coordinates;
    direction: string;
    newCoordinates: Coordinates;
    scrollableAncestors: Element[];
}): boolean;
//# sourceMappingURL=scroll.d.ts.map