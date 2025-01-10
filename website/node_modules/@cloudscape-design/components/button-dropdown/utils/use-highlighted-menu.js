// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useState, useMemo, useCallback } from 'react';
import { indexIncludes, indexEquals } from './utils';
import createItemsTree from './create-items-tree';
import moveHighlightOneStep from './move-highlight';
export default function useHighlightedMenu({ items, hasExpandableGroups, isInRestrictedView = false, }) {
    const [targetIndex, setTargetIndex] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState([]);
    const [isUsingMouse, setIsUsingMouse] = useState(true);
    const { getItem, getItemIndex, getSequentialIndex, getParentIndex } = useMemo(() => createItemsTree(items), [items]);
    const targetItem = useMemo(() => getItem(targetIndex), [targetIndex, getItem]);
    const isHighlighted = useCallback((item) => {
        const index = getItemIndex(item);
        return indexIncludes(index, targetIndex);
    }, [targetIndex, getItemIndex]);
    // check if keyboard focus is on the element
    const isKeyboardHighlight = useCallback((item) => {
        const index = getItemIndex(item);
        return !isUsingMouse && indexEquals(index, targetIndex);
    }, [targetIndex, getItemIndex, isUsingMouse]);
    const isExpanded = useCallback((group) => {
        const index = getItemIndex(group);
        return indexIncludes(index, expandedIndex);
    }, [expandedIndex, getItemIndex]);
    const moveHighlight = useCallback((direction) => {
        const getNext = (index) => {
            const nextIndex = getSequentialIndex(index, direction);
            const item = getItem(nextIndex || [-1]);
            if (!nextIndex || !item) {
                return null;
            }
            const parentIndex = getParentIndex(item);
            const parentItem = parentIndex && getItem(parentIndex);
            return { index: nextIndex, item, parent: parentItem || undefined };
        };
        const nextIndex = moveHighlightOneStep({
            startIndex: targetIndex,
            expandedIndex,
            getNext,
            hasExpandableGroups,
            isInRestrictedView,
        });
        if (nextIndex) {
            setTargetIndex(nextIndex);
        }
    }, [targetIndex, expandedIndex, getItem, getSequentialIndex, getParentIndex, hasExpandableGroups, isInRestrictedView]);
    const highlightItem = useCallback((item) => {
        setTargetIndex(getItemIndex(item));
    }, [getItemIndex]);
    const expandGroup = useCallback((group) => {
        const groupIndex = group ? getItemIndex(group) : targetIndex;
        const firstChildIndex = [...groupIndex, 0];
        // move to the first child item unless in restricted mode
        setTargetIndex(isInRestrictedView ? groupIndex : firstChildIndex);
        setExpandedIndex(groupIndex);
    }, [targetIndex, getItemIndex, isInRestrictedView]);
    const collapseGroup = useCallback(() => {
        if (expandedIndex.length > 0) {
            setTargetIndex(expandedIndex);
            setExpandedIndex(expandedIndex.slice(0, -1));
        }
    }, [expandedIndex]);
    const reset = useCallback(() => {
        setTargetIndex([]);
        setExpandedIndex([]);
    }, []);
    return {
        targetItem,
        isHighlighted,
        isKeyboardHighlight,
        isExpanded,
        moveHighlight,
        highlightItem,
        expandGroup,
        collapseGroup,
        reset,
        setIsUsingMouse,
    };
}
//# sourceMappingURL=use-highlighted-menu.js.map