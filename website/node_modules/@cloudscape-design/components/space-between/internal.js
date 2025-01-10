import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import flattenChildren from 'react-keyed-flatten-children';
export default function InternalSpaceBetween(_a) {
    var { direction = 'vertical', size, children, alignItems, __internalRootRef } = _a, props = __rest(_a, ["direction", "size", "children", "alignItems", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    /*
     Flattening the children allows us to "see through" React Fragments and nested arrays.
     */
    const flattenedChildren = flattenChildren(children);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root, styles[direction], styles[`${direction}-${size}`], alignItems && styles[`align-${alignItems}`]), ref: __internalRootRef }), flattenedChildren.map(child => {
        const key = typeof child === 'object' ? child.key : undefined;
        return (React.createElement("div", { key: key, className: styles.child }, child));
    })));
}
//# sourceMappingURL=internal.js.map