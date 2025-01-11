import React from 'react';
export declare namespace FilteringTokenProps {
    type Operation = 'and' | 'or';
}
export interface FilteringTokenProps {
    ariaLabel?: string;
    showOperation: boolean;
    operation: FilteringTokenProps.Operation;
    andText: string;
    orText: string;
    dismissAriaLabel?: string;
    operatorAriaLabel?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onChange: (op: FilteringTokenProps.Operation) => void;
    onDismiss: () => void;
}
export default function FilteringToken({ ariaLabel, showOperation, operation, andText, orText, dismissAriaLabel, operatorAriaLabel, disabled, children, onChange, onDismiss, }: FilteringTokenProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map