/// <reference types="react" />
import { AnnotationContextProps } from '../interfaces';
export interface AnnotationProps {
    globalStepIndex: number;
    onOpen: (stepId: number) => void;
    i18nStrings: AnnotationContextProps['i18nStrings'];
    focusOnRender: boolean;
    totalLocalSteps: number;
    taskLocalStepIndex: number;
}
export declare function ClosedAnnotation({ globalStepIndex, onOpen, i18nStrings, focusOnRender, totalLocalSteps, taskLocalStepIndex, }: AnnotationProps): JSX.Element;
//# sourceMappingURL=closed-annotation.d.ts.map