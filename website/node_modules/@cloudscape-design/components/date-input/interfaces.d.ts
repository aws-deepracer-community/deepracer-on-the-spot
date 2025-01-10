import { BaseInputProps, InputProps } from '../input/interfaces';
import { BaseComponentProps } from '../internal/base-component';
import { FormFieldValidationControlProps } from '../internal/context/form-field-context';
export interface DateInputProps extends BaseInputProps, FormFieldValidationControlProps, BaseComponentProps {
    /**
     * The current input value, in YYYY-MM-DD format.
     */
    value: string;
}
export declare namespace DateInputProps {
    type Ref = InputProps.Ref;
}
//# sourceMappingURL=interfaces.d.ts.map