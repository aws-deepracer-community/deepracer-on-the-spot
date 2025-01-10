// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useContext, useLayoutEffect } from 'react';
import { DynamicOverlapContext } from '../../context/dynamic-overlap-context';
import { useRef, useCallback } from 'react';
import { useResizeObserver } from '@cloudscape-design/component-toolkit/internal';
/**
 * Observes the height of an element referenced by the returning ref and sets the value as overlapping
 * height for the surrounding AppLayout component.
 * @param props.disabled disables hook if not applicable
 * @returns ref to be measured as overlapping height
 */
export function useDynamicOverlap(props) {
    var _a;
    const disabled = (_a = props === null || props === void 0 ? void 0 : props.disabled) !== null && _a !== void 0 ? _a : false;
    const setDynamicOverlapHeight = useContext(DynamicOverlapContext);
    const overlapElementRef = useRef(null);
    const getElement = useCallback(() => overlapElementRef.current, [overlapElementRef]);
    const updateState = useCallback((entry) => {
        if (!disabled) {
            setDynamicOverlapHeight(entry.contentBoxHeight);
        }
    }, [disabled, setDynamicOverlapHeight]);
    useResizeObserver(getElement, updateState);
    useLayoutEffect(function handleDynamicOverlapHeight() {
        // Set overlap height back to 0 when unmounting
        return () => {
            if (!disabled) {
                setDynamicOverlapHeight(0);
            }
        };
    }, [disabled, setDynamicOverlapHeight]);
    return overlapElementRef;
}
//# sourceMappingURL=index.js.map