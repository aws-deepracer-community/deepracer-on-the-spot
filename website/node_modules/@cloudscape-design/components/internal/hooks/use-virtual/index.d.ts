import React from 'react';
import { VirtualItem } from '../../vendor/react-virtual';
interface UseVirtualProps<Item> {
    items: readonly Item[];
    parentRef: React.RefObject<HTMLElement>;
    estimateSize: () => number;
}
interface RowVirtualizer {
    virtualItems: VirtualItem[];
    totalSize: number;
    scrollToIndex: (index: number) => void;
}
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
export declare function useVirtual<Item extends object>({ items, parentRef, estimateSize, }: UseVirtualProps<Item>): RowVirtualizer;
export {};
//# sourceMappingURL=index.d.ts.map