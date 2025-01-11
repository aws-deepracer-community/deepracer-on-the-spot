// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useMemo, useRef } from 'react';
import { useVirtual as useVirtualDefault } from '../../vendor/react-virtual';
const MAX_ITEM_MOUNTS = 100;
/**
 * The useVirtual from react-virtual@2 might produce an infinite update loop caused by setting
 * measured item sizes in the render cycle (as part of the measureRef assignment):
 *      The sum of all measured item sizes is returned as totalSize which is then set on the list container.
 *      Enforcing new container height might result in an items size change e.g. when the content wraps.
 *
 * The infinite update cycle causes React "Maximum update depth exceeded" error and can be additionally confirmed
 * by logging the totalSize which should then bounce between two values.
 *
 * The number of item refs assignments is limited to MAX_ITEM_MOUNTS unless items or indices change.
 * That is based on the assumption the item height stays constant after its first render.
 */
export function useVirtual({ items, parentRef, estimateSize, }) {
    const rowVirtualizer = useVirtualDefault({ size: items.length, parentRef, estimateSize, overscan: 5 });
    // Cache virtual item mounts to limit the amount of mounts per item.
    const measuresCache = useRef(new WeakMap());
    // Clear mounts cache every time indices, items, or size estimate change.
    const indicesKey = rowVirtualizer.virtualItems.map(item => `${item.index}`).join(':');
    useEffect(() => {
        measuresCache.current = new WeakMap();
    }, [indicesKey, items, estimateSize]);
    const virtualItems = useMemo(() => rowVirtualizer.virtualItems.map(virtualItem => (Object.assign(Object.assign({}, virtualItem), { measureRef: (node) => {
            var _a;
            const mountedCount = (_a = measuresCache.current.get(items[virtualItem.index])) !== null && _a !== void 0 ? _a : 0;
            if (mountedCount < MAX_ITEM_MOUNTS) {
                virtualItem.measureRef(node);
                measuresCache.current.set(items[virtualItem.index], mountedCount + 1);
            }
        } }))), [items, rowVirtualizer.virtualItems]);
    return {
        virtualItems,
        totalSize: rowVirtualizer.totalSize,
        scrollToIndex: rowVirtualizer.scrollToIndex,
    };
}
//# sourceMappingURL=index.js.map