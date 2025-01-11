import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import * as React from 'react';
import InternalIcon from '../icon/internal';
import InternalSpinner from '../spinner/internal';
import styles from './styles.css.js';
function getIconAlign(props) {
    const standalone = props.variant === 'icon' || props.variant === 'inline-icon';
    return standalone ? 'left' : props.iconAlign;
}
function IconWrapper(_a) {
    var { iconName, iconUrl, iconAlt, iconSvg, iconSize, badge } = _a, props = __rest(_a, ["iconName", "iconUrl", "iconAlt", "iconSvg", "iconSize", "badge"]);
    if (!iconName && !iconUrl && !iconSvg) {
        return null;
    }
    return (React.createElement(InternalIcon, { className: clsx(styles.icon, styles[`icon-${getIconAlign(props)}`], props.iconClass), name: iconName, url: iconUrl, svg: iconSvg, alt: iconAlt, size: iconSize, badge: badge }));
}
export function LeftIcon(props) {
    if (props.loading) {
        return React.createElement(InternalSpinner, { className: clsx(styles.icon, styles['icon-left']) });
    }
    else if (getIconAlign(props) === 'left') {
        return React.createElement(IconWrapper, Object.assign({}, props));
    }
    return null;
}
export function RightIcon(props) {
    if (getIconAlign(props) === 'right') {
        return React.createElement(IconWrapper, Object.assign({}, props));
    }
    return null;
}
//# sourceMappingURL=icon-helper.js.map