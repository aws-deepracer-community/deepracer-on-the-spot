import { WizardProps } from './interfaces';
export declare function useFunnelChangeEvent(funnelInteractionId: string | undefined, steps: WizardProps['steps']): void;
export declare function getStepConfiguration(steps: WizardProps['steps']): {
    name: string;
    number: number;
    isOptional: boolean;
}[];
//# sourceMappingURL=analytics.d.ts.map