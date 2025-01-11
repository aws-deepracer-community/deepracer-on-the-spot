// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import styles from './styles.css.js';
import InternalButton from '../../button/internal';
function createActionButton(testUtilClasses, action, buttonText, onButtonClick) {
    if (!action && buttonText) {
        action = (React.createElement(InternalButton, { className: testUtilClasses.actionButton, onClick: onButtonClick, formAction: "none" }, buttonText));
    }
    return action ? React.createElement("div", { className: testUtilClasses.actionSlot }, action) : null;
}
export function ActionsWrapper({ className, testUtilClasses, action, discoveredActions, buttonText, onButtonClick, }) {
    const actionButton = createActionButton(testUtilClasses, action, buttonText, onButtonClick);
    if (!actionButton && discoveredActions.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: clsx(styles.root, className) },
        actionButton,
        discoveredActions));
}
//# sourceMappingURL=index.js.map