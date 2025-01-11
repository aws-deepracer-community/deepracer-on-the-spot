import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import FlexibleColumnLayout from './flexible-column-layout';
import GridColumnLayout from './grid-column-layout';
import styles from './styles.css.js';
export const COLUMN_TRIGGERS = ['default', 'xxs', 'xs'];
/**
 * A responsive grid layout.
 */
export default function ColumnLayout(_a) {
    var { columns = 1, variant = 'default', borders = 'none', disableGutters = false, minColumnWidth, children, __breakpoint, __internalRootRef } = _a, restProps = __rest(_a, ["columns", "variant", "borders", "disableGutters", "minColumnWidth", "children", "__breakpoint", "__internalRootRef"]);
    const baseProps = getBaseProps(restProps);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles['column-layout']), ref: __internalRootRef }), minColumnWidth ? (React.createElement(FlexibleColumnLayout, { columns: columns, borders: borders, variant: variant, minColumnWidth: minColumnWidth, disableGutters: disableGutters }, children)) : (React.createElement(GridColumnLayout, { columns: columns, variant: variant, borders: borders, disableGutters: disableGutters, __breakpoint: __breakpoint }, children))));
}
//# sourceMappingURL=internal.js.map