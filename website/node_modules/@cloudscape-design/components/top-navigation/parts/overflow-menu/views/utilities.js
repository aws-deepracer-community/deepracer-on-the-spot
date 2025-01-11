// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef } from 'react';
import FocusLock from '../../../../internal/components/focus-lock';
import Header from '../header';
import { UtilityMenuItem } from '../menu-item';
import styles from '../../../styles.css.js';
import { useUniqueId } from '../../../../internal/hooks/use-unique-id';
const UtilitiesView = ({ headerText, dismissIconAriaLabel, onClose, items = [], focusIndex }) => {
    const headerId = useUniqueId('overflow-menu-header');
    const ref = useRef(null);
    useEffect(() => {
        var _a;
        // A focus index is used to set the focus back to the submenu trigger
        // returning from a submenu.
        if (typeof focusIndex === 'number') {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [focusIndex]);
    return (React.createElement(FocusLock, { autoFocus: true },
        React.createElement(Header, { dismissIconAriaLabel: dismissIconAriaLabel, onClose: onClose },
            React.createElement("span", { id: headerId }, headerText)),
        React.createElement("ul", { className: styles['overflow-menu-list'], "aria-labelledby": headerId }, items.map((utility, index) => (React.createElement(UtilityMenuItem, Object.assign({ key: index, index: index, ref: index === focusIndex ? ref : undefined, onClose: onClose }, utility)))))));
};
export default UtilitiesView;
//# sourceMappingURL=utilities.js.map