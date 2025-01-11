import React from 'react';
import { TransitionStatus } from '../internal/components/transition';
import { SplitPanelContentProps } from './interfaces';
interface SplitPanelContentBottomProps extends SplitPanelContentProps {
    state: TransitionStatus;
    transitioningElementRef: React.Ref<any>;
    appLayoutMaxWidth: React.CSSProperties | undefined;
}
export declare function SplitPanelContentBottom({ baseProps, isOpen, state, transitioningElementRef, splitPanelRef, cappedSize, header, resizeHandle, children, appLayoutMaxWidth, panelHeaderId, onToggle, }: SplitPanelContentBottomProps): JSX.Element;
export {};
//# sourceMappingURL=bottom.d.ts.map