// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalButton from '../../../button/internal';
import styles from '../../styles.css.js';
const Header = ({ children, secondaryText, backIconAriaLabel, dismissIconAriaLabel, onBack, onClose, }) => {
    return (React.createElement("div", { className: styles['overflow-menu-header'] },
        onBack && (React.createElement(InternalButton
        // Used for test-utils, which require the selectable element to have a classname.
        // eslint-disable-next-line react/forbid-component-props
        , { 
            // Used for test-utils, which require the selectable element to have a classname.
            // eslint-disable-next-line react/forbid-component-props
            className: styles['overflow-menu-back-button'], ariaLabel: backIconAriaLabel, iconName: "angle-left", variant: "icon", onClick: () => onBack() })),
        React.createElement("h2", { className: styles['overflow-menu-header-text'] },
            React.createElement("div", { className: styles['overflow-menu-header-text--title'] }, children),
            secondaryText && React.createElement("div", { className: styles['overflow-menu-header-text--secondary'] }, secondaryText)),
        React.createElement(InternalButton
        // eslint-disable-next-line react/forbid-component-props
        , { 
            // eslint-disable-next-line react/forbid-component-props
            className: styles['overflow-menu-dismiss-button'], ariaLabel: dismissIconAriaLabel, iconName: "close", variant: "icon", onClick: () => onClose && onClose() })));
};
export default Header;
//# sourceMappingURL=header.js.map