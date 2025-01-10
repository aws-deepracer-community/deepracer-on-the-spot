// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useImperativeHandle } from 'react';
export default function useForwardFocus(mainRef, controlRef) {
    useImperativeHandle(mainRef, () => ({
        focus(...args) {
            var _a;
            (_a = controlRef.current) === null || _a === void 0 ? void 0 : _a.focus(...args);
        },
    }), [controlRef]);
}
//# sourceMappingURL=index.js.map