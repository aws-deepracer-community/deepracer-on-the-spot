// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalIcon from '../icon/internal';
import styles from './styles.css.js';
export const Segment = React.forwardRef(({ disabled, text, iconName, iconAlt, iconUrl, iconSvg, isActive, onClick, onKeyDown, tabIndex }, ref) => {
    return (React.createElement("button", { className: clsx(styles.segment, { [styles.disabled]: !!disabled }, { [styles.selected]: isActive }), ref: ref, onClick: onClick, onKeyDown: onKeyDown, disabled: disabled, type: "button", tabIndex: tabIndex, "aria-pressed": isActive ? 'true' : 'false', "aria-label": !text ? iconAlt : undefined },
        (iconName || iconUrl || iconSvg) && (React.createElement(InternalIcon, { className: clsx(styles.icon, text ? styles['with-text'] : styles['with-no-text']), name: iconName, url: iconUrl, svg: iconSvg, alt: iconAlt, variant: disabled ? 'disabled' : 'normal' })),
        React.createElement("span", null, text)));
});
//# sourceMappingURL=segment.js.map