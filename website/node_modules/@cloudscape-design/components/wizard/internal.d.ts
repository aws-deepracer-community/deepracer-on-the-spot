/// <reference types="react" />
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { WizardProps } from './interfaces';
type InternalWizardProps = WizardProps & InternalBaseComponentProps;
export default function InternalWizard({ steps, activeStepIndex: controlledActiveStepIndex, submitButtonText, isLoadingNextStep, allowSkipTo, secondaryActions, onCancel, onSubmit, onNavigate, __internalRootRef, ...rest }: InternalWizardProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map