// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect } from 'react';
import { fireNonCancelableEvent } from '../internal/events';
import { useDebounceCallback } from '../internal/hooks/use-debounce-callback';
import { useStableCallback } from '@cloudscape-design/component-toolkit/internal';
export function useChangeEffect(editor, onChange, onDelayedChange) {
    const debouncedChangeHandler = useDebounceCallback((detail) => {
        fireNonCancelableEvent(onDelayedChange, detail);
    }, 0);
    const handleChange = useStableCallback(() => {
        const changeDetail = { value: (editor === null || editor === void 0 ? void 0 : editor.getValue()) || '' };
        fireNonCancelableEvent(onChange, changeDetail);
        debouncedChangeHandler(changeDetail);
    });
    useEffect(() => {
        if (!editor) {
            return;
        }
        editor.on('change', handleChange);
        return () => editor.off('change', handleChange);
    }, [editor, handleChange]);
}
//# sourceMappingURL=listeners.js.map