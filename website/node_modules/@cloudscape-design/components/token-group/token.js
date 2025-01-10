// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React from 'react';
import clsx from 'clsx';
import DismissButton from './dismiss-button';
import styles from './styles.css.js';
import { FormFieldError } from '../form-field/internal';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { getBaseProps } from '../internal/base-component';
export function Token(_a) {
    var { ariaLabel, disabled, dismissLabel, onDismiss, children, errorText, errorIconAriaLabel } = _a, restProps = __rest(_a, ["ariaLabel", "disabled", "dismissLabel", "onDismiss", "children", "errorText", "errorIconAriaLabel"]);
    const errorId = useUniqueId('error');
    const baseProps = getBaseProps(restProps);
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(styles.token, baseProps.className), role: "group", "aria-label": ariaLabel, "aria-describedby": errorText ? errorId : undefined, "aria-disabled": disabled }),
        React.createElement("div", { className: clsx(styles['token-box'], disabled && styles['token-box-disabled'], errorText && styles['token-box-error']) },
            children,
            onDismiss && React.createElement(DismissButton, { disabled: disabled, dismissLabel: dismissLabel, onDismiss: onDismiss })),
        errorText && (React.createElement(FormFieldError, { id: errorId, errorIconAriaLabel: errorIconAriaLabel }, errorText))));
}
//# sourceMappingURL=token.js.map