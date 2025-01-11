import React from 'react';
import { InternalBaseComponentProps } from '../../hooks/use-base-component/index.js';
export interface AbstractSwitchProps extends React.HTMLAttributes<HTMLElement>, InternalBaseComponentProps {
    controlId?: string;
    controlClassName: string;
    outlineClassName: string;
    showOutline?: boolean;
    disabled?: boolean;
    nativeControl: (props: React.InputHTMLAttributes<HTMLInputElement>) => React.ReactElement;
    styledControl: React.ReactElement;
    label?: React.ReactNode;
    description?: React.ReactNode;
    descriptionBottomPadding?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    ariaControls?: string;
    onClick: () => void;
}
export default function AbstractSwitch({ controlId, controlClassName, outlineClassName, showOutline, disabled, nativeControl, styledControl, label, description, descriptionBottomPadding, ariaLabel, ariaLabelledby, ariaDescribedby, ariaControls, onClick, __internalRootRef, ...rest }: AbstractSwitchProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map