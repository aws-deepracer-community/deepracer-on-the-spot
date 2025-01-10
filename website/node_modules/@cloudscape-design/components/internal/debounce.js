// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// default delay for components defined by UX
export const DEBOUNCE_DEFAULT_DELAY = 200;
// instead of using this function directly, consider using useDebounceCallback hook
export default function debounce(func, delay = DEBOUNCE_DEFAULT_DELAY) {
    let timeout;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            timeout = null;
            func(...args);
        }, delay);
    };
}
//# sourceMappingURL=debounce.js.map