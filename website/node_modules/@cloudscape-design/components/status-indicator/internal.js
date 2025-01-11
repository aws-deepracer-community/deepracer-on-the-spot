import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import InternalIcon from '../icon/internal';
import InternalSpinner from '../spinner/internal';
const typeToIcon = size => ({
    error: React.createElement(InternalIcon, { name: "status-negative", size: size }),
    warning: React.createElement(InternalIcon, { name: "status-warning", size: size }),
    success: React.createElement(InternalIcon, { name: "status-positive", size: size }),
    info: React.createElement(InternalIcon, { name: "status-info", size: size }),
    stopped: React.createElement(InternalIcon, { name: "status-stopped", size: size }),
    pending: React.createElement(InternalIcon, { name: "status-pending", size: size }),
    'in-progress': React.createElement(InternalIcon, { name: "status-in-progress", size: size }),
    loading: React.createElement(InternalSpinner, null),
});
export default function StatusIndicator(_a) {
    var { type, children, iconAriaLabel, colorOverride, wrapText = true, __animate = false, __internalRootRef, __size = 'normal', __display = 'inline-block' } = _a, rest = __rest(_a, ["type", "children", "iconAriaLabel", "colorOverride", "wrapText", "__animate", "__internalRootRef", "__size", "__display"]);
    const baseProps = getBaseProps(rest);
    return (React.createElement("span", Object.assign({}, baseProps, { className: clsx(styles.root, styles[`status-${type}`], {
            [styles[`color-override-${colorOverride}`]]: colorOverride,
        }, baseProps.className), ref: __internalRootRef }),
        React.createElement("span", { className: clsx(styles.container, styles[`display-${__display}`], wrapText === false && styles['overflow-ellipsis'], __animate && styles['container-fade-in']) },
            React.createElement("span", { className: clsx(styles.icon, __animate && styles['icon-shake']), "aria-label": iconAriaLabel, role: iconAriaLabel ? 'img' : undefined },
                typeToIcon(__size)[type],
                __display === 'inline' && React.createElement(React.Fragment, null, "\u00A0")),
            children)));
}
//# sourceMappingURL=internal.js.map