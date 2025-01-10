import React from 'react';
import { InternalButtonProps } from '../../button/internal';
interface ActionsWrapperProps {
    className: string;
    testUtilClasses: {
        actionSlot: string;
        actionButton: string;
    };
    action: React.ReactNode;
    discoveredActions: Array<React.ReactNode>;
    buttonText: React.ReactNode;
    onButtonClick: InternalButtonProps['onClick'];
}
export declare function ActionsWrapper({ className, testUtilClasses, action, discoveredActions, buttonText, onButtonClick, }: ActionsWrapperProps): JSX.Element | null;
export {};
//# sourceMappingURL=index.d.ts.map