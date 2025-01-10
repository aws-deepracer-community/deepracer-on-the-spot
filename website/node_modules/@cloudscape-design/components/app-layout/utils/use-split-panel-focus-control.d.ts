import { DependencyList, RefObject } from 'react';
import { ButtonProps } from '../../button/interfaces';
export type SplitPanelLastInteraction = {
    type: 'open';
} | {
    type: 'close';
} | {
    type: 'position';
};
export interface SplitPanelFocusControlRefs {
    toggle: RefObject<ButtonProps.Ref>;
    slider: RefObject<HTMLDivElement>;
    preferences: RefObject<ButtonProps.Ref>;
}
interface SplitPanelFocusControlState {
    refs: SplitPanelFocusControlRefs;
    setLastInteraction: (interaction: SplitPanelLastInteraction) => void;
}
export declare function useSplitPanelFocusControl(dependencies: DependencyList): SplitPanelFocusControlState;
export {};
//# sourceMappingURL=use-split-panel-focus-control.d.ts.map