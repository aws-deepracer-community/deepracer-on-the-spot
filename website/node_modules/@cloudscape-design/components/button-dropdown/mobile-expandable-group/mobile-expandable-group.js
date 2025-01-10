// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
const MobileExpandableGroup = ({ children, trigger, open }) => {
    return (React.createElement("div", { className: clsx(styles.root) },
        React.createElement("div", { className: styles.trigger }, trigger),
        React.createElement("div", { className: clsx(styles.dropdown, { [styles.open]: open }), "data-open": open }, children)));
};
export default MobileExpandableGroup;
//# sourceMappingURL=mobile-expandable-group.js.map