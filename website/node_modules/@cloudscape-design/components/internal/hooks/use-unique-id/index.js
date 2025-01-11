var _a;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
let counter = 0;
const useIdFallback = () => {
    const idRef = useRef(null);
    if (!idRef.current) {
        idRef.current = `${counter++}-${Date.now()}-${Math.round(Math.random() * 10000)}`;
    }
    return idRef.current;
};
const useId = (_a = React.useId) !== null && _a !== void 0 ? _a : useIdFallback;
export function useUniqueId(prefix) {
    return `${prefix ? prefix : ''}` + useId();
}
//# sourceMappingURL=index.js.map