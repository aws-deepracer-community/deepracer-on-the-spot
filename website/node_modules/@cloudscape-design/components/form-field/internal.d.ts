import React from 'react';
import { InternalFormFieldProps } from './interfaces';
interface FormFieldErrorProps {
    id?: string;
    children?: React.ReactNode;
    errorIconAriaLabel?: string;
}
export declare function FormFieldError({ id, children, errorIconAriaLabel }: FormFieldErrorProps): JSX.Element;
export declare function ConstraintText({ id, hasError, children, }: {
    id?: string;
    hasError: boolean;
    children: React.ReactNode;
}): JSX.Element;
export default function InternalFormField({ controlId, stretch, label, info, i18nStrings, children, secondaryControl, description, constraintText, errorText, __hideLabel, __internalRootRef, __disableGutters, ...rest }: InternalFormFieldProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map