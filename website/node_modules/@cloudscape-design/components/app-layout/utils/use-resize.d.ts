import React from 'react';
import { AppLayoutProps } from '../interfaces';
import { FocusControlRefs } from './use-focus-control';
export interface DrawerResizeProps {
    activeDrawer: AppLayoutProps.Drawer | undefined;
    activeDrawerSize: number;
    onActiveDrawerResize: (detail: {
        id: string;
        size: number;
    }) => void;
    drawersRefs: FocusControlRefs;
    isToolsOpen: boolean;
    drawersMaxWidth: number;
    drawersMinWidth: number;
}
declare function useResize(drawerRefObject: React.RefObject<HTMLDivElement>, { activeDrawer, activeDrawerSize, onActiveDrawerResize, drawersRefs, isToolsOpen, drawersMinWidth, drawersMaxWidth, }: DrawerResizeProps): {
    resizeHandle: JSX.Element;
    drawerSize: number;
};
export default useResize;
//# sourceMappingURL=use-resize.d.ts.map