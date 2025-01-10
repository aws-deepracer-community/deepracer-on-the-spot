import React from 'react';
import { InternalColumnLayoutProps } from './interfaces';
import { ColumnLayoutBreakpoint } from './internal';
interface GridColumnLayoutProps extends Required<Pick<InternalColumnLayoutProps, 'columns' | 'variant' | 'borders' | 'disableGutters'>> {
    children: React.ReactNode;
    __breakpoint?: ColumnLayoutBreakpoint;
}
export default function GridColumnLayout({ columns, variant, borders, disableGutters, __breakpoint, children, }: GridColumnLayoutProps): JSX.Element;
export {};
//# sourceMappingURL=grid-column-layout.d.ts.map