import React from 'react';
import { InternalColumnLayoutProps } from '../interfaces';
export declare function calculcateCssColumnCount(columns: number, minColumnWidth: number, containerWidth: number | null): number;
interface FlexibleColumnLayoutProps extends Pick<InternalColumnLayoutProps, 'minColumnWidth' | 'columns' | 'variant' | 'borders' | 'disableGutters'> {
    children: React.ReactNode;
}
export default function FlexibleColumnLayout({ columns, minColumnWidth, disableGutters, variant, children, }: FlexibleColumnLayoutProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map