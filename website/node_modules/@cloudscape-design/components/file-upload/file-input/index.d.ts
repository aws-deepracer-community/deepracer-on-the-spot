import React from 'react';
import { FormFieldValidationControlProps } from '../../internal/context/form-field-context';
import { FileUploadProps } from '../interfaces';
interface FileInputProps extends FormFieldValidationControlProps {
    accept?: string;
    ariaRequired?: boolean;
    multiple: boolean;
    value: readonly File[];
    onChange: (files: File[]) => void;
    children: React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<FileInputProps & React.RefAttributes<FileUploadProps.Ref>>;
export default _default;
//# sourceMappingURL=index.d.ts.map