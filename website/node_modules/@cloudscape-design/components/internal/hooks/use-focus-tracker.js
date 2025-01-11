// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef, useEffect } from 'react';
import { fireNonCancelableEvent } from '../events';
import FocusTracker from '../focus-tracker';
export const useFocusTracker = ({ rootRef, onBlur, onFocus }) => {
    const focusTracker = useRef(null);
    useEffect(() => {
        if (!rootRef.current) {
            return;
        }
        focusTracker.current = new FocusTracker(rootRef.current, {
            onFocusLeave: () => {
                fireNonCancelableEvent(onBlur);
            },
            onFocusEnter: () => {
                fireNonCancelableEvent(onFocus);
            },
        });
        focusTracker.current.initialize();
        return () => {
            var _a;
            (_a = focusTracker.current) === null || _a === void 0 ? void 0 : _a.destroy();
        };
    }, [rootRef, onBlur, onFocus]);
};
//# sourceMappingURL=use-focus-tracker.js.map