import React from 'react';
export declare const DEFAULT_COLUMN_WIDTH = 120;
export interface ColumnWidthDefinition {
    id: PropertyKey;
    minWidth?: string | number;
    maxWidth?: string | number;
    width?: string | number;
}
interface WidthsContext {
    getColumnStyles(sticky: boolean, columnId: PropertyKey): React.CSSProperties;
    columnWidths: Map<PropertyKey, number>;
    updateColumn: (columnId: PropertyKey, newWidth: number) => void;
    setCell: (sticky: boolean, columnId: PropertyKey, node: null | HTMLElement) => void;
}
declare const WidthsContext: React.Context<WidthsContext>;
interface WidthProviderProps {
    visibleColumns: readonly ColumnWidthDefinition[];
    resizableColumns: boolean | undefined;
    containerRef: React.RefObject<HTMLElement>;
    children: React.ReactNode;
}
export declare function ColumnWidthsProvider({ visibleColumns, resizableColumns, containerRef, children }: WidthProviderProps): JSX.Element;
export declare function useColumnWidths(): WidthsContext;
export {};
//# sourceMappingURL=use-column-widths.d.ts.map