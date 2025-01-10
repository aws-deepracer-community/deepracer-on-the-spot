import React from 'react';
import { ActionButtonsController } from '../controllers/action-buttons';
export declare function createUseDiscoveredAction(onActionRegistered: ActionButtonsController['onActionRegistered']): (type: string) => {
    discoveredActions: React.ReactNode[];
    headerRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
};
//# sourceMappingURL=use-discovered-action.d.ts.map