// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useMemo } from 'react';
import { scrollElementIntoView } from '../internal/utils/scrollable-containers';
function iterateTableCells(table, func) {
    table.querySelectorAll('tr').forEach((row, rowIndex) => {
        row.querySelectorAll('td').forEach((cell, cellIndex) => {
            func(cell, rowIndex, cellIndex);
        });
    });
}
/**
 * This hook is used to navigate between table cells using the keyboard arrow keys.
 * All the functionality is implemented in the hook, so the table component does not
 * need to implement any keyboard event handlers.
 * @param enable - Toggle functionality of the hook
 * @param tableRoot - A ref to a table container. Ideally the root element of the table (<table>); tbody is also acceptable.
 * @param columnDefinitions - The column definitions for the table.
 * @param numRows - The number of rows in the table.
 */
function useTableFocusNavigation({ enableKeyboardNavigation, selectionType, tableRoot, columnDefinitions, numRows, }) {
    const focusableColumns = useMemo(() => {
        const cols = columnDefinitions.map(column => !!column.editConfig);
        if (selectionType) {
            cols.unshift(false);
        }
        return cols;
    }, [columnDefinitions, selectionType]);
    const maxColumnIndex = focusableColumns.length - 1;
    const minColumnIndex = selectionType ? 1 : 0;
    const focusCell = useCallback((rowIndex, columnIndex) => {
        if (tableRoot === null || tableRoot === void 0 ? void 0 : tableRoot.current) {
            iterateTableCells(tableRoot.current, (cell, rIndex, cIndex) => {
                var _a;
                if (rIndex === rowIndex && cIndex === columnIndex) {
                    const editButton = cell.querySelector('button:last-child');
                    if (editButton) {
                        (_a = editButton.focus) === null || _a === void 0 ? void 0 : _a.call(editButton);
                        scrollElementIntoView(editButton);
                    }
                }
            });
        }
    }, [tableRoot]);
    const shiftFocus = useCallback((vertical, horizontal) => {
        var _a;
        const focusedCell = (_a = tableRoot.current) === null || _a === void 0 ? void 0 : _a.querySelector('td:focus-within');
        if (!focusedCell) {
            return;
        }
        const columnIndex = focusedCell.cellIndex;
        const rowIndex = focusedCell.parentElement.rowIndex;
        let newRowIndex = rowIndex;
        let newColumnIndex = columnIndex;
        if (vertical !== 0) {
            newRowIndex = Math.min(numRows, Math.max(rowIndex + vertical, 0));
        }
        if (horizontal !== 0) {
            while (newColumnIndex <= maxColumnIndex && newColumnIndex >= minColumnIndex) {
                newColumnIndex += horizontal;
                if (focusableColumns[newColumnIndex]) {
                    break;
                }
            }
        }
        if ((rowIndex !== newRowIndex || columnIndex !== newColumnIndex) && tableRoot.current) {
            focusCell(newRowIndex, newColumnIndex);
        }
    }, [focusCell, focusableColumns, maxColumnIndex, minColumnIndex, numRows, tableRoot]);
    const handleArrowKeyEvents = useCallback((event) => {
        var _a, _b;
        const abort = !!((_a = tableRoot.current) === null || _a === void 0 ? void 0 : _a.querySelector('[data-inline-editing-active = "true"]')) ||
            !((_b = document.activeElement) === null || _b === void 0 ? void 0 : _b.closest('[data-inline-editing-active]'));
        if (abort) {
            return;
        }
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                shiftFocus(-1, 0);
                break;
            case 'ArrowDown':
                event.preventDefault();
                shiftFocus(1, 0);
                break;
            case 'ArrowLeft':
                event.preventDefault();
                shiftFocus(0, -1);
                break;
            case 'ArrowRight':
                event.preventDefault();
                shiftFocus(0, 1);
                break;
            // istanbul ignore next (default case = do nothing, not testable)
            default:
                return;
        }
    }, [shiftFocus, tableRoot]);
    useEffect(() => {
        if (!tableRoot.current || enableKeyboardNavigation) {
            return;
        }
        const tableElement = tableRoot.current;
        tableRoot.current.addEventListener('keydown', handleArrowKeyEvents);
        return () => tableElement && tableElement.removeEventListener('keydown', handleArrowKeyEvents);
    }, [enableKeyboardNavigation, focusableColumns, handleArrowKeyEvents, tableRoot]);
}
export default useTableFocusNavigation;
//# sourceMappingURL=use-table-focus-navigation.js.map