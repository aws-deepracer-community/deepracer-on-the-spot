import React from 'react';
import { NonCancelableEventHandler } from '../internal/events';
import { RadioGroupProps } from './interfaces';
interface RadioButtonProps extends RadioGroupProps.RadioButtonDefinition {
    name: string;
    checked: boolean;
    onChange?: NonCancelableEventHandler<RadioGroupProps.ChangeDetail>;
}
declare const _default: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
//# sourceMappingURL=radio-button.d.ts.map