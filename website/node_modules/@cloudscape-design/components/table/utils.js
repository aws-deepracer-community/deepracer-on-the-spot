import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
export const applyTrackBy = (trackBy, item) => {
    if (typeof trackBy === 'function') {
        return trackBy(item);
    }
    return item[trackBy];
};
export const getItemKey = (trackBy, item, index) => {
    if (!trackBy) {
        return index;
    }
    return applyTrackBy(trackBy, item);
};
export const getTrackableValue = (trackBy, item) => {
    if (!trackBy) {
        return item;
    }
    return applyTrackBy(trackBy, item);
};
export const getColumnKey = (column, index) => {
    return column.id || index;
};
export const toContainerVariant = (variant) => {
    const isDefaultVariant = !variant || variant === 'container';
    return isDefaultVariant ? 'default' : variant === 'borderless' ? 'embedded' : variant;
};
export function checkSortingState(columnDefinitions, sortingComparator) {
    const matchedColumn = columnDefinitions.filter(column => column.sortingComparator === sortingComparator)[0];
    if (!matchedColumn) {
        warnOnce('Table', 'Currently active sorting comparator was not found in any columns. Make sure to provide the same comparator function instance on each render.');
    }
}
export function getVisibleColumnDefinitions({ columnDisplay, visibleColumns, columnDefinitions, }) {
    // columnsDisplay has a precedence over visibleColumns.
    if (columnDisplay) {
        return getVisibleColumnDefinitionsFromColumnDisplay({ columnDisplay, columnDefinitions });
    }
    else if (visibleColumns) {
        return getVisibleColumnDefinitionsFromVisibleColumns({ visibleColumns, columnDefinitions });
    }
    else {
        return columnDefinitions;
    }
}
function getVisibleColumnDefinitionsFromColumnDisplay({ columnDisplay, columnDefinitions, }) {
    const columnDefinitionsById = columnDefinitions.reduce((accumulator, item) => (item.id === undefined ? accumulator : Object.assign(Object.assign({}, accumulator), { [item.id]: item })), {});
    return columnDisplay
        .filter(item => item.visible)
        .map(item => columnDefinitionsById[item.id])
        .filter(Boolean);
}
function getVisibleColumnDefinitionsFromVisibleColumns({ visibleColumns, columnDefinitions, }) {
    const ids = new Set(visibleColumns);
    return columnDefinitions.filter(({ id }) => id !== undefined && ids.has(id));
}
export function getStickyClassNames(styles, props) {
    return {
        [styles['sticky-cell']]: !!props,
        [styles['sticky-cell-pad-left']]: !!(props === null || props === void 0 ? void 0 : props.padLeft),
        [styles['sticky-cell-last-left']]: !!(props === null || props === void 0 ? void 0 : props.lastLeft),
        [styles['sticky-cell-last-right']]: !!(props === null || props === void 0 ? void 0 : props.lastRight),
    };
}
//# sourceMappingURL=utils.js.map