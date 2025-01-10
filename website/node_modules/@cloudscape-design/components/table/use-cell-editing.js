// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __awaiter } from "tslib";
import { useCallback, useState } from 'react';
import { fireCancelableEvent } from '../internal/events';
export function useCellEditing({ onCancel, onSubmit }) {
    const [currentEditCell, setCurrentEditCell] = useState(null);
    const [lastSuccessfulEditCell, setLastSuccessfulEditCell] = useState(null);
    const [currentEditLoading, setCurrentEditLoading] = useState(false);
    const startEdit = (cellId) => {
        setLastSuccessfulEditCell(null);
        setCurrentEditCell(cellId);
    };
    const cancelEdit = useCallback(() => setCurrentEditCell(null), []);
    const completeEdit = (cellId, editCancelled) => {
        const eventCancelled = fireCancelableEvent(onCancel, {});
        if (!eventCancelled) {
            setCurrentEditCell(null);
            if (!editCancelled) {
                setLastSuccessfulEditCell(cellId);
            }
        }
    };
    const checkEditing = ({ rowIndex, colIndex }) => rowIndex === (currentEditCell === null || currentEditCell === void 0 ? void 0 : currentEditCell.rowIndex) && colIndex === currentEditCell.colIndex;
    const checkLastSuccessfulEdit = ({ rowIndex, colIndex }) => rowIndex === (lastSuccessfulEditCell === null || lastSuccessfulEditCell === void 0 ? void 0 : lastSuccessfulEditCell.rowIndex) && colIndex === lastSuccessfulEditCell.colIndex;
    const submitEdit = onSubmit
        ? (...args) => __awaiter(this, void 0, void 0, function* () {
            setCurrentEditLoading(true);
            try {
                yield onSubmit(...args);
            }
            finally {
                setCurrentEditLoading(false);
            }
        })
        : undefined;
    return {
        isLoading: currentEditLoading,
        startEdit,
        cancelEdit,
        checkEditing,
        checkLastSuccessfulEdit,
        completeEdit,
        submitEdit,
    };
}
//# sourceMappingURL=use-cell-editing.js.map