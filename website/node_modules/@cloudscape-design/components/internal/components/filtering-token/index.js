// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalSelect from '../../../select/internal';
import InternalIcon from '../../../icon/internal';
import styles from './styles.css.js';
export default function FilteringToken({ ariaLabel, showOperation, operation, andText, orText, dismissAriaLabel, operatorAriaLabel, disabled, children, onChange, onDismiss, }) {
    return (React.createElement("div", { className: styles.root, role: "group", "aria-label": ariaLabel },
        showOperation && (React.createElement(InternalSelect, { __inFilteringToken: true, className: styles.select, options: [
                { value: 'and', label: andText },
                { value: 'or', label: orText },
            ], selectedOption: { value: operation, label: operation === 'and' ? andText : orText }, onChange: e => onChange(e.detail.selectedOption.value), disabled: disabled, ariaLabel: operatorAriaLabel })),
        React.createElement("div", { className: clsx(styles.token, showOperation && styles['show-operation'], disabled && styles['token-disabled']), "aria-disabled": disabled },
            React.createElement("div", { className: styles['token-content'] }, children),
            React.createElement("button", { type: "button", className: styles['dismiss-button'], "aria-label": dismissAriaLabel, onClick: onDismiss, disabled: disabled },
                React.createElement(InternalIcon, { name: "close" })))));
}
//# sourceMappingURL=index.js.map