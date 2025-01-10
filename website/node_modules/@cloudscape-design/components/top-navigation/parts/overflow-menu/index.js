// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import Router, { Route } from './router';
import UtilitiesView from './views/utilities';
import SubmenuView from './views/submenu';
import styles from '../../styles.css.js';
import { useInternalI18n } from '../../../i18n/context';
const OverflowMenu = ({ headerText, dismissIconAriaLabel, backIconAriaLabel, items = [], onClose, }) => {
    const i18n = useInternalI18n('top-navigation');
    const renderedDismissIconAriaLabel = i18n('i18nStrings.overflowMenuDismissIconAriaLabel', dismissIconAriaLabel);
    const renderedBackIconAriaLabel = i18n('i18nStrings.overflowMenuBackIconAriaLabel', backIconAriaLabel);
    return (React.createElement("div", { className: styles['overflow-menu'], onKeyUp: event => {
            if (event.key === 'Escape') {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        } },
        React.createElement(Router, null,
            React.createElement(Route, { view: "utilities", element: data => (React.createElement(UtilitiesView, { headerText: i18n('i18nStrings.overflowMenuTitleText', headerText), items: items, focusIndex: data === null || data === void 0 ? void 0 : data.utilityIndex, dismissIconAriaLabel: renderedDismissIconAriaLabel, backIconAriaLabel: renderedBackIconAriaLabel, onClose: onClose })) }),
            React.createElement(Route, { view: "dropdown-menu", element: data => (React.createElement(SubmenuView, { headerText: data === null || data === void 0 ? void 0 : data.headerText, headerSecondaryText: data === null || data === void 0 ? void 0 : data.headerSecondaryText, dismissIconAriaLabel: renderedDismissIconAriaLabel, backIconAriaLabel: renderedBackIconAriaLabel, definition: data === null || data === void 0 ? void 0 : data.definition, utilityIndex: data === null || data === void 0 ? void 0 : data.utilityIndex, onClose: onClose })) }))));
};
export default OverflowMenu;
//# sourceMappingURL=index.js.map