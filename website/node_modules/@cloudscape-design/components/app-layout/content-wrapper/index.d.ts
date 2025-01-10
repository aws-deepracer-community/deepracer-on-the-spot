import React from 'react';
import { AppLayoutProps } from '../interfaces';
export interface ContentWrapperProps {
    className?: string;
    contentType: AppLayoutProps.ContentType;
    children?: React.ReactNode;
    isMobile: boolean;
    navigationPadding: boolean;
    toolsPadding: boolean;
    disablePaddings?: boolean;
    contentWidthStyles?: React.CSSProperties;
}
declare const ContentWrapper: React.ForwardRefExoticComponent<ContentWrapperProps & React.RefAttributes<HTMLDivElement>>;
export default ContentWrapper;
//# sourceMappingURL=index.d.ts.map