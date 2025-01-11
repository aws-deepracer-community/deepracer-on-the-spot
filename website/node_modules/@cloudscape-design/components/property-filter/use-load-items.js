// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
import { fireNonCancelableEvent } from '../internal/events/index';
/**
 * This hook generates `onBlur`, `onFocus` and `onLoadItems` handlers that make sure an `onLoadItems` event
 * fires exactly once every time control they are used on gets focused.
 * It is necessary to do this because Autosuggest and Select dedupe their `onLoadItems` events stopping
 * the same event from firing twice in a row. This means, refocusing the control sometimes results in
 * `onLoadItems` firing, but sometimes not.
 */
export const useLoadItems = (onLoadItems, focusFilteringText, currentFilteringProperty, currentFilteringText, currentFilteringOperator) => {
    const focusIn = useRef(false);
    const handleBlur = () => {
        focusIn.current = true;
    };
    const fireLoadItems = (detail) => {
        var _a;
        fireNonCancelableEvent(onLoadItems, Object.assign(Object.assign({}, detail), { filteringText: (_a = currentFilteringText !== null && currentFilteringText !== void 0 ? currentFilteringText : detail.filteringText) !== null && _a !== void 0 ? _a : '', filteringProperty: currentFilteringProperty, filteringOperator: currentFilteringOperator }));
        focusIn.current = false;
    };
    const handleFocus = () => {
        if (focusIn.current) {
            fireLoadItems({ firstPage: true, samePage: false, filteringText: focusFilteringText });
        }
    };
    const handleLoadItems = ({ detail }) => fireLoadItems(detail);
    return {
        onBlur: handleBlur,
        onFocus: handleFocus,
        onLoadItems: handleLoadItems,
    };
};
//# sourceMappingURL=use-load-items.js.map