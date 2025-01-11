import { TableProps } from '../interfaces';
import { SelectionProps } from './interfaces';
export declare function useSelection<T>({ items, selectedItems, selectionType, isItemDisabled, trackBy, onSelectionChange, ariaLabels, loading, }: Pick<TableProps<T>, 'ariaLabels' | 'items' | 'selectedItems' | 'selectionType' | 'isItemDisabled' | 'trackBy' | 'onSelectionChange' | 'loading'>): {
    isItemSelected: (item: T) => boolean;
    getSelectAllProps: () => SelectionProps;
    getItemSelectionProps: (item: T) => SelectionProps;
    updateShiftToggle: (value: boolean) => void;
};
//# sourceMappingURL=use-selection.d.ts.map