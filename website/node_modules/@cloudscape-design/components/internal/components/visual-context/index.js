// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useLayoutEffect, useState } from 'react';
import { findUpUntil } from '../../utils/dom';
const contextMatch = /awsui-context-([\w-]+)/;
export function useVisualContext(elementRef) {
    const [value, setValue] = useState('');
    useLayoutEffect(() => {
        var _a;
        if (elementRef.current) {
            const contextParent = findUpUntil(elementRef.current, node => !!node.className.match(contextMatch));
            setValue((_a = contextParent === null || contextParent === void 0 ? void 0 : contextParent.className.match(contextMatch)[1]) !== null && _a !== void 0 ? _a : '');
        }
    }, [elementRef]);
    return value;
}
/**
 * This function returns only the className string needed to apply a
 * visual context to the DOM. It is used by the default export but
 * can also be imported directly for situations where the insertion
 * of a <div> node creates style problems.
 */
export function getVisualContextClassname(contextName) {
    return `awsui-context-${contextName}`;
}
export default function VisualContext({ contextName, className, children }) {
    return React.createElement("div", { className: clsx(getVisualContextClassname(contextName), className) }, children);
}
//# sourceMappingURL=index.js.map