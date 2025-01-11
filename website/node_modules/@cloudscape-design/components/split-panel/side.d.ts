import React from 'react';
import { ButtonProps } from '../button/interfaces';
import { SplitPanelContentProps } from './interfaces';
interface SplitPanelContentSideProps extends SplitPanelContentProps {
    openButtonAriaLabel?: string;
    toggleRef: React.RefObject<ButtonProps.Ref>;
}
export declare function SplitPanelContentSide({ baseProps, splitPanelRef, toggleRef, header, children, resizeHandle, isOpen, cappedSize, openButtonAriaLabel, panelHeaderId, onToggle, }: SplitPanelContentSideProps): JSX.Element;
export {};
//# sourceMappingURL=side.d.ts.map