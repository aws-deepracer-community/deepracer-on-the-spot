import React from 'react';
import { ButtonProps } from '../../button/interfaces';
import { AppLayoutProps } from '../interfaces';
interface MobileToolbarProps {
    anyPanelOpen: boolean;
    unfocusable: boolean | undefined;
    toggleRefs: {
        navigation: React.Ref<ButtonProps.Ref>;
        tools: React.Ref<ButtonProps.Ref>;
    };
    navigationHide: boolean | undefined;
    toolsHide: boolean | undefined;
    topOffset?: number;
    ariaLabels: AppLayoutProps.Labels | undefined;
    mobileBarRef: React.Ref<HTMLDivElement>;
    children: React.ReactNode;
    onNavigationOpen: () => void;
    onToolsOpen: () => void;
    drawers: Array<AppLayoutProps.Drawer> | undefined;
    activeDrawerId: string | null;
    onDrawerChange: (newDrawerId: string | null) => void;
}
export declare function MobileToolbar({ ariaLabels, toggleRefs, topOffset, navigationHide, toolsHide, anyPanelOpen, unfocusable, drawers, activeDrawerId, children, onNavigationOpen, onToolsOpen, onDrawerChange, mobileBarRef, }: MobileToolbarProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map