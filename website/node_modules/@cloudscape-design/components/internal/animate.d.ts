export declare function getDOMRects(elements: Record<string, HTMLElement | null>): Record<string, DOMRect>;
export declare function animate({ oldState, elements, onTransitionsEnd, newElementInitialState, }: {
    elements: Record<string, HTMLElement | null>;
    oldState: Record<string, DOMRect>;
    onTransitionsEnd?: () => void;
    newElementInitialState?: (newRect: DOMRect) => {
        scale?: number;
        y?: number;
    };
}): void;
//# sourceMappingURL=animate.d.ts.map