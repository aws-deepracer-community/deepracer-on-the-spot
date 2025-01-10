const stateToIcon = {
    sortable: 'caret-down',
    ascending: 'caret-up-filled',
    descending: 'caret-down-filled',
};
export const getSortingStatus = (sortable, sorted, descending, disabled) => {
    if (sorted) {
        if (descending) {
            return 'descending';
        }
        return 'ascending';
    }
    if (sortable && !disabled) {
        return 'sortable';
    }
    return undefined;
};
export const getSortingIconName = (sortingState) => stateToIcon[sortingState];
export const isSorted = (column, sortingColumn) => column === sortingColumn ||
    (column.sortingField !== undefined && column.sortingField === sortingColumn.sortingField) ||
    (column.sortingComparator !== undefined && column.sortingComparator === sortingColumn.sortingComparator);
//# sourceMappingURL=utils.js.map