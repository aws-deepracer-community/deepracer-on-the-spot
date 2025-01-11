interface FocusTrackerOptions {
    onFocusEnter: () => void;
    onFocusLeave: () => void;
}
export default class FocusTracker {
    private node;
    private readonly onFocusLeave;
    private readonly onFocusEnter;
    private currentlyFocused;
    constructor(node: HTMLElement, { onFocusEnter, onFocusLeave }: FocusTrackerOptions);
    initialize(): void;
    destroy(): void;
    private focusInListener;
    private focusOutListener;
    private triggerBlur;
    private triggerFocus;
}
export {};
//# sourceMappingURL=focus-tracker.d.ts.map