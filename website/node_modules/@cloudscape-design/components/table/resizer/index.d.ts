/// <reference types="react" />
interface ResizerProps {
    onWidthUpdate: (newWidth: number) => void;
    onWidthUpdateCommit: () => void;
    ariaLabelledby?: string;
    minWidth?: number;
    tabIndex?: number;
    focusId?: string;
    showFocusRing?: boolean;
    roleDescription?: string;
}
export declare function Divider({ className }: {
    className?: string;
}): JSX.Element;
export declare function Resizer({ onWidthUpdate, onWidthUpdateCommit, ariaLabelledby, minWidth, tabIndex, showFocusRing, focusId, roleDescription, }: ResizerProps): JSX.Element;
export declare function ResizeTracker(): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map