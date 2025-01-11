// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useMergeRefs } from '../../hooks/use-merge-refs';
import TabTrap from '../tab-trap/index';
import { getFirstFocusable, getLastFocusable } from './utils';
function FocusLock({ className, disabled, autoFocus, restoreFocus, children }, ref) {
    const returnFocusToRef = useRef(null);
    const containerRef = useRef(null);
    const focusFirst = () => {
        var _a;
        if (containerRef.current) {
            (_a = getFirstFocusable(containerRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const focusLast = () => {
        var _a;
        if (containerRef.current) {
            (_a = getLastFocusable(containerRef.current)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    // Captures focus when `autoFocus` is set, and the component is mounted or
    // `disabled` changes from true to false.
    useEffect(() => {
        if (autoFocus && !disabled) {
            returnFocusToRef.current = document.activeElement;
            focusFirst();
        }
    }, [autoFocus, disabled]);
    // Restore focus if `restoreFocus` is set, and `disabled` changes from false
    // to true.
    const [previouslyDisabled, setPreviouslyDisabled] = useState(!!disabled);
    useEffect(() => {
        var _a;
        if (previouslyDisabled !== !!disabled) {
            setPreviouslyDisabled(!!disabled);
            if (restoreFocus && disabled) {
                (_a = returnFocusToRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                returnFocusToRef.current = null;
            }
        }
    }, [previouslyDisabled, disabled, restoreFocus]);
    // Restore focus if `restoreFocus` is set and the component is unmounted.
    // Using a callback ref for this is safer than using useEffect cleanups.
    const restoreFocusHandler = useCallback((elem) => {
        var _a;
        if (elem === null && restoreFocus) {
            (_a = returnFocusToRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            returnFocusToRef.current = null;
        }
    }, [restoreFocus]);
    useImperativeHandle(ref, () => ({ focusFirst }));
    const mergedRef = useMergeRefs(containerRef, restoreFocusHandler);
    return (React.createElement(React.Fragment, null,
        React.createElement(TabTrap, { disabled: disabled, focusNextCallback: focusLast }),
        React.createElement("div", { className: className, ref: mergedRef }, children),
        React.createElement(TabTrap, { disabled: disabled, focusNextCallback: focusFirst })));
}
export default React.forwardRef(FocusLock);
//# sourceMappingURL=index.js.map