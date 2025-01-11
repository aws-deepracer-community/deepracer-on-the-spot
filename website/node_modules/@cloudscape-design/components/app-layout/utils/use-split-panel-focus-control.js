// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useRef } from 'react';
export function useSplitPanelFocusControl(dependencies) {
    const refs = {
        toggle: useRef(null),
        slider: useRef(null),
        preferences: useRef(null),
    };
    const lastInteraction = useRef(null);
    useEffect(() => {
        var _a, _b, _c, _d;
        switch ((_a = lastInteraction.current) === null || _a === void 0 ? void 0 : _a.type) {
            case 'open':
                (_b = refs.slider.current) === null || _b === void 0 ? void 0 : _b.focus();
                break;
            case 'close':
                (_c = refs.toggle.current) === null || _c === void 0 ? void 0 : _c.focus();
                break;
            case 'position':
                (_d = refs.preferences.current) === null || _d === void 0 ? void 0 : _d.focus();
                break;
        }
        lastInteraction.current = null;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
    return {
        refs,
        setLastInteraction: (interaction) => (lastInteraction.current = interaction),
    };
}
//# sourceMappingURL=use-split-panel-focus-control.js.map