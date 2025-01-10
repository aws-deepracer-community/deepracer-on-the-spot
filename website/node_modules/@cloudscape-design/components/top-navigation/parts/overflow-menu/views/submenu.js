// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { useNavigate } from '../router';
import Header from '../header';
import { SubmenuItem } from '../menu-item';
import { useUniqueId } from '../../../../internal/hooks/use-unique-id';
import FocusLock from '../../../../internal/components/focus-lock';
import styles from '../../../styles.css.js';
import { fireCancelableEvent, isPlainLeftClick } from '../../../../internal/events';
const SubmenuView = ({ onClose, utilityIndex, headerText, headerSecondaryText, dismissIconAriaLabel, backIconAriaLabel, definition, }) => {
    const navigate = useNavigate();
    const headerId = useUniqueId('overflow-menu-header');
    return (React.createElement(FocusLock, { autoFocus: true },
        React.createElement(Header, { secondaryText: headerSecondaryText, dismissIconAriaLabel: dismissIconAriaLabel, backIconAriaLabel: backIconAriaLabel, onClose: onClose, onBack: () => navigate('utilities', { utilityIndex }) },
            React.createElement("span", { id: headerId }, headerText)),
        React.createElement("ul", { className: clsx(styles['overflow-menu-list'], styles['overflow-menu-list-submenu']), "aria-labelledby": headerId }, definition.items.map((item, index) => (React.createElement(SubmenuItem, Object.assign({ key: index }, item, { onClick: (event, item) => {
                if (item.href && isPlainLeftClick(event)) {
                    fireCancelableEvent(definition.onItemFollow, { id: item.id, href: item.href, external: item.external }, event);
                }
                fireCancelableEvent(definition.onItemClick, { id: item.id, href: item.href, external: item.external }, event);
                onClose === null || onClose === void 0 ? void 0 : onClose();
            } })))))));
};
export default SubmenuView;
//# sourceMappingURL=submenu.js.map