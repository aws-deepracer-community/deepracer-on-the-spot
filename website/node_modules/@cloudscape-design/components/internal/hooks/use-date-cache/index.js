// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
export function useDateCache() {
    const cacheRef = useRef(new Map());
    return (date) => {
        const current = cacheRef.current.get(date.getTime());
        if (current) {
            return current;
        }
        cacheRef.current.set(date.getTime(), date);
        return date;
    };
}
//# sourceMappingURL=index.js.map