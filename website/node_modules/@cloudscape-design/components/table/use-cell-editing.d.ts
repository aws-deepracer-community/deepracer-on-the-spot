import { TableProps } from './interfaces';
import { CancelableEventHandler } from '../internal/events';
export interface CellId {
    rowIndex: number;
    colIndex: number;
}
interface CellEditingProps {
    onCancel?: CancelableEventHandler;
    onSubmit?: TableProps.SubmitEditFunction<any>;
}
export declare function useCellEditing({ onCancel, onSubmit }: CellEditingProps): {
    isLoading: boolean;
    startEdit: (cellId: CellId) => void;
    cancelEdit: () => void;
    checkEditing: ({ rowIndex, colIndex }: CellId) => boolean;
    checkLastSuccessfulEdit: ({ rowIndex, colIndex }: CellId) => boolean;
    completeEdit: (cellId: CellId, editCancelled: boolean) => void;
    submitEdit: ((item: any, column: TableProps.ColumnDefinition<any>, newValue: unknown) => Promise<void>) | undefined;
};
export {};
//# sourceMappingURL=use-cell-editing.d.ts.map