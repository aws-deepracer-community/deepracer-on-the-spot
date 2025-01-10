// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useImperativeHandle, useRef } from 'react';
/**
 * Focus forwarding helper for radio groups where only the first selected
 * child element should be focused.
 */
export default function useRadioGroupForwardFocus(forwardedRef, items, value) {
    const itemRef = useRef(null);
    const itemIndex = items && findIndex(items, item => item.value === value);
    useImperativeHandle(forwardedRef, () => ({
        focus() {
            var _a;
            (_a = itemRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        },
    }));
    return [itemRef, itemIndex !== undefined && itemIndex !== -1 ? itemIndex : 0];
}
function findIndex(items, predicate) {
    for (let i = 0; i < items.length; i++) {
        if (predicate(items[i])) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=radio-group.js.map