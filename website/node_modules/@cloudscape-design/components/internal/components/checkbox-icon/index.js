import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../../base-component';
import { useVisualRefresh } from '../../hooks/use-visual-mode';
import styles from './styles.css.js';
// Can't use css variables for svg attributes
export const dimensionsByTheme = {
    default: {
        viewBox: '0 0 14 14',
        indeterminate: '2.5,7 11.5,7',
        checked: '2.5,7 6,10 11,3',
        xy: 0.5,
        r: 1.5,
        size: 13,
    },
    refresh: {
        viewBox: '0 0 16 16',
        indeterminate: '3.5,8 12.5,8',
        checked: '3.5,8 7,11 12,4',
        xy: 1,
        r: 2,
        size: 14,
    },
};
const CheckboxIcon = (_a) => {
    var { checked, indeterminate, disabled = false } = _a, restProps = __rest(_a, ["checked", "indeterminate", "disabled"]);
    const baseProps = getBaseProps(restProps);
    const theme = useVisualRefresh() ? 'refresh' : 'default';
    const dimensions = dimensionsByTheme[theme];
    return (React.createElement("svg", Object.assign({ className: styles.root, viewBox: dimensions.viewBox, "aria-hidden": "true", focusable: "false" }, baseProps),
        React.createElement("rect", { className: clsx(styles['styled-box'], {
                [styles['styled-box-checked']]: checked,
                [styles['styled-box-indeterminate']]: indeterminate,
                [styles['styled-box-disabled']]: disabled,
            }), x: dimensions.xy, y: dimensions.xy, rx: dimensions.r, ry: dimensions.r, width: dimensions.size, height: dimensions.size }),
        checked || indeterminate ? (React.createElement("polyline", { className: clsx(styles['styled-line'], { [styles['styled-line-disabled']]: disabled }), points: indeterminate ? dimensions.indeterminate : dimensions.checked })) : null));
};
export default CheckboxIcon;
//# sourceMappingURL=index.js.map