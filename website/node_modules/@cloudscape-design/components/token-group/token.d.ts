import React from 'react';
interface TokenProps {
    children: React.ReactNode;
    ariaLabel?: string;
    dismissLabel?: string;
    onDismiss?: () => void;
    disabled?: boolean;
    errorText?: React.ReactNode;
    errorIconAriaLabel?: string;
    className?: string;
}
export declare function Token({ ariaLabel, disabled, dismissLabel, onDismiss, children, errorText, errorIconAriaLabel, ...restProps }: TokenProps): JSX.Element;
export {};
//# sourceMappingURL=token.d.ts.map