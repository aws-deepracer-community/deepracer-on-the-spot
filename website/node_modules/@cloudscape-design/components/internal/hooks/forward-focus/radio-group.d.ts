import React from 'react';
export interface ForwardFocusRef {
    focus(): void;
}
/**
 * Focus forwarding helper for radio groups where only the first selected
 * child element should be focused.
 */
export default function useRadioGroupForwardFocus(forwardedRef: React.Ref<ForwardFocusRef>, items: ReadonlyArray<{
    value: string;
}> | undefined, value: string | null): [React.Ref<HTMLInputElement>, number];
//# sourceMappingURL=radio-group.d.ts.map