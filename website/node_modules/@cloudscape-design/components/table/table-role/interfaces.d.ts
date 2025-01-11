/// <reference types="react" />
export type TableRole = 'table' | 'grid' | 'treegrid' | 'grid-default';
export interface GridNavigationProps {
    keyboardNavigation: boolean;
    pageSize: number;
    getTable: () => null | HTMLTableElement;
    children: React.ReactNode;
}
export interface FocusedCell {
    rowIndex: number;
    colIndex: number;
    elementIndex: number;
    element: HTMLElement;
}
//# sourceMappingURL=interfaces.d.ts.map