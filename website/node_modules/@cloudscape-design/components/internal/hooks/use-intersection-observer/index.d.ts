/**
 * A hook that uses an Intersection Observer on the target element ref
 * and detects if the element is intersecting with its parent.
 */
export declare function useIntersectionObserver<T extends HTMLElement>(): {
    ref: (instance: T | null) => void;
    isIntersecting: boolean;
};
//# sourceMappingURL=index.d.ts.map