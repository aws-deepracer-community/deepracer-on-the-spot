// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { InternalButton } from '../../button/internal';
import InternalIcon from '../../icon/internal';
import styles from './styles.css.js';
export const togglesConfig = {
    navigation: {
        TagName: 'nav',
        iconName: 'menu',
        getLabels: (labels = {}) => ({
            mainLabel: labels.navigation,
            openLabel: labels.navigationToggle,
            closeLabel: labels.navigationClose,
        }),
    },
    tools: {
        TagName: 'aside',
        iconName: 'status-info',
        getLabels: (labels = {}) => ({
            mainLabel: labels.tools,
            openLabel: labels.toolsToggle,
            closeLabel: labels.toolsClose,
        }),
    },
};
export const ToggleButton = React.forwardRef(({ className, ariaLabel, ariaExpanded, ariaControls, iconName, iconSvg, disabled, testId, onClick, badge, }, ref) => {
    return (React.createElement("button", { ref: ref, className: clsx(className, styles['toggle-button']), "aria-label": ariaLabel, type: "button", onClick: onClick, disabled: disabled, "aria-expanded": ariaExpanded, "aria-haspopup": ariaExpanded ? undefined : true, "aria-controls": ariaControls, "data-testid": testId },
        React.createElement(InternalIcon, { svg: iconSvg, name: iconName, badge: badge })));
});
export const CloseButton = React.forwardRef(({ className, ariaLabel, onClick }, ref) => {
    return (React.createElement("span", { className: styles['close-button'] },
        React.createElement(InternalButton, { ref: ref, className: className, ariaLabel: ariaLabel, variant: "icon", formAction: "none", iconName: "close", onClick: onClick })));
});
//# sourceMappingURL=index.js.map