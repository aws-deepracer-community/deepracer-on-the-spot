import React from 'react';
import { AppLayoutProps } from '../interfaces';
interface NotificationsProps {
    testUtilsClassName: string;
    children?: React.ReactNode;
    labels: AppLayoutProps.Labels | undefined;
    topOffset: number | undefined;
    disableContentPaddings?: boolean;
}
interface NotificationWrapperProps extends NotificationsProps {
    sticky: boolean | undefined;
}
export declare const Notifications: React.ForwardRefExoticComponent<NotificationWrapperProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=index.d.ts.map