import React from 'react';
export interface FocusLockProps {
    className?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    restoreFocus?: boolean;
    children: React.ReactNode;
}
export interface FocusLockRef {
    /**
     * Focuses the first element in the component.
     */
    focusFirst(): void;
}
declare const _default: React.ForwardRefExoticComponent<FocusLockProps & React.RefAttributes<FocusLockRef>>;
export default _default;
//# sourceMappingURL=index.d.ts.map