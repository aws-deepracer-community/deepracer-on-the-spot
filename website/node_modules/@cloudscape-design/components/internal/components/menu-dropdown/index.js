import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../../base-component';
import { applyDisplayName } from '../../utils/apply-display-name';
import InternalButtonDropdown from '../../../button-dropdown/internal';
import InternalIcon from '../../../icon/internal';
import buttonDropdownStyles from '../../../button-dropdown/styles.css.js';
import styles from './styles.css.js';
export const ButtonTrigger = React.forwardRef(({ testUtilsClass, iconName, iconUrl, iconAlt, iconSvg, badge, ariaLabel, offsetRight, disabled, expanded, children, onClick, }, ref) => {
    const hasIcon = iconName || iconUrl || iconSvg;
    return (React.createElement("button", { ref: ref, type: "button", className: clsx(styles.button, styles[`offset-right-${offsetRight}`], testUtilsClass, {
            [styles.expanded]: expanded,
        }), "aria-label": ariaLabel, "aria-expanded": !!expanded, "aria-haspopup": true, disabled: disabled, onClick: event => {
            event.preventDefault();
            onClick && onClick();
        } },
        hasIcon && (React.createElement(InternalIcon, { className: styles.icon, name: iconName, url: iconUrl, alt: iconAlt, svg: iconSvg, badge: badge })),
        children && React.createElement("span", { className: styles.text }, children),
        children && (React.createElement(InternalIcon, { name: "caret-down-filled", className: expanded ? buttonDropdownStyles['rotate-up'] : buttonDropdownStyles['rotate-down'] }))));
});
const MenuDropdown = (_a) => {
    var { iconName, iconUrl, iconAlt, iconSvg, badge, offsetRight, children } = _a, props = __rest(_a, ["iconName", "iconUrl", "iconAlt", "iconSvg", "badge", "offsetRight", "children"]);
    const baseProps = getBaseProps(props);
    const dropdownTrigger = ({ triggerRef, ariaLabel, isOpen, testUtilsClass, disabled, onClick, }) => {
        return (React.createElement(ButtonTrigger, { testUtilsClass: testUtilsClass, ref: triggerRef, disabled: disabled, expanded: isOpen, iconName: iconName, iconUrl: iconUrl, iconAlt: iconAlt, iconSvg: iconSvg, badge: badge, ariaLabel: ariaLabel, offsetRight: offsetRight, onClick: onClick }, children));
    };
    return (React.createElement(InternalButtonDropdown, Object.assign({}, baseProps, props, { variant: "navigation", customTriggerBuilder: dropdownTrigger, preferCenter: true })));
};
applyDisplayName(MenuDropdown, 'MenuDropdown');
export default MenuDropdown;
//# sourceMappingURL=index.js.map