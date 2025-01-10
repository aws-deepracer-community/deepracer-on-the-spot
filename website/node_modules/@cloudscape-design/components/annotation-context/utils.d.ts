import { AnnotationContextProps } from './interfaces';
export declare function getStepInfo(annotations: readonly AnnotationContextProps.Task[], index: number): {
    task: import("..").TutorialPanelProps.Task;
    step: import("..").TutorialPanelProps.Step;
    localIndex: number;
    taskIndex: number;
} | {
    task: undefined;
    step: undefined;
    localIndex: number;
    taskIndex: number;
};
//# sourceMappingURL=utils.d.ts.map