// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
export function RuntimeContentWrapper({ mountContent, unmountContent }) {
    const ref = useRef(null);
    useEffect(() => {
        const container = ref.current;
        mountContent(container);
        return () => unmountContent(container);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return React.createElement("div", { ref: ref });
}
//# sourceMappingURL=runtime-content-wrapper.js.map