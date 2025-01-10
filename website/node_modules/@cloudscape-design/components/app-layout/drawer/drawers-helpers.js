// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function splitItems(maybeItems, splitIndex, activeId) {
    const items = maybeItems !== null && maybeItems !== void 0 ? maybeItems : [];
    const visibleItems = items.slice(0, splitIndex);
    const overflowItems = items.slice(splitIndex);
    if (overflowItems.length === 1) {
        return { visibleItems: items, overflowItems: [] };
    }
    if (activeId && overflowItems.length > 0 && visibleItems.length > 0) {
        const activeInOverflow = overflowItems.find(item => item.id === activeId);
        if (activeInOverflow) {
            overflowItems.splice(overflowItems.indexOf(activeInOverflow), 1);
            overflowItems.unshift(visibleItems.pop());
            visibleItems.push(activeInOverflow);
        }
    }
    return { visibleItems, overflowItems };
}
//# sourceMappingURL=drawers-helpers.js.map