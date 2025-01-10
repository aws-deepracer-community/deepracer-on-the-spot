import React from 'react';
import { CheckboxProps } from './interfaces';
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
interface InternalProps extends CheckboxProps, InternalBaseComponentProps {
    tabIndex?: -1;
    showOutline?: boolean;
}
declare const InternalCheckbox: React.ForwardRefExoticComponent<InternalProps & React.RefAttributes<CheckboxProps.Ref>>;
export default InternalCheckbox;
//# sourceMappingURL=internal.d.ts.map