import React from 'react';
interface NoDataCellProps {
    totalColumnsCount: number;
    hasFooter: boolean;
    loading?: boolean;
    loadingText?: string;
    empty?: React.ReactNode;
    tableRef: React.RefObject<HTMLTableElement>;
    containerRef: React.RefObject<HTMLElement>;
}
export declare function NoDataCell({ totalColumnsCount, hasFooter, loading, loadingText, empty, tableRef, containerRef, }: NoDataCellProps): JSX.Element;
export {};
//# sourceMappingURL=no-data-cell.d.ts.map