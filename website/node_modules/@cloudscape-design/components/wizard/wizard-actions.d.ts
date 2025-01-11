/// <reference types="react" />
interface WizardActionsProps {
    cancelButtonText?: string;
    onCancelClick: () => void;
    isPrimaryLoading: boolean;
    primaryButtonText?: string;
    primaryButtonLoadingText?: string;
    onPrimaryClick: () => void;
    showPrevious: boolean;
    previousButtonText?: string;
    onPreviousClick: () => void;
    showSkipTo: boolean;
    skipToButtonText?: string;
    onSkipToClick: () => void;
}
export default function WizardActions({ cancelButtonText, onCancelClick, isPrimaryLoading, primaryButtonText, primaryButtonLoadingText, onPrimaryClick, showPrevious, previousButtonText, onPreviousClick, showSkipTo, skipToButtonText, onSkipToClick, }: WizardActionsProps): JSX.Element;
export {};
//# sourceMappingURL=wizard-actions.d.ts.map