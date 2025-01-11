// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import { RuntimeContentWrapper } from './runtime-content-wrapper';
function convertRuntimeAction(action, context) {
    if (!action) {
        return null;
    }
    return (React.createElement(RuntimeContentWrapper, { key: action.id + '-' + context.type, mountContent: container => action.mountContent(container, context), unmountContent: container => action.unmountContent(container) }));
}
export function createUseDiscoveredAction(onActionRegistered) {
    return function useDiscoveredAction(type) {
        const [discoveredActions, setDiscoveredActions] = useState([]);
        const headerRef = useRef(null);
        const contentRef = useRef(null);
        useEffect(() => {
            return onActionRegistered(actions => {
                setDiscoveredActions(actions.map(action => convertRuntimeAction(action, { type, headerRef, contentRef })));
            });
        }, [type]);
        return { discoveredActions, headerRef, contentRef };
    };
}
//# sourceMappingURL=use-discovered-action.js.map