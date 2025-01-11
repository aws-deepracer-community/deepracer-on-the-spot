// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import styles from './styles.css.js';
import InternalButton from '../button/internal';
import InternalFormField from '../form-field/internal';
export function PropertyEditor({ property, operator, filter, operatorForm, onCancel, onSubmit, i18nStrings, }) {
    const [value, onChange] = useState(null);
    const submitToken = () => onSubmit({ propertyKey: property.propertyKey, operator, value });
    return (React.createElement("div", { className: styles['property-editor'] },
        React.createElement("div", { className: styles['property-editor-form'] },
            React.createElement(InternalFormField, { label: property.groupValuesLabel }, operatorForm({ value, onChange, operator, filter }))),
        React.createElement("div", { className: styles['property-editor-actions'] },
            React.createElement(InternalButton, { variant: "link", className: styles['property-editor-cancel'], onClick: onCancel }, i18nStrings.cancelActionText),
            React.createElement(InternalButton, { className: styles['property-editor-submit'], onClick: submitToken }, i18nStrings.applyActionText))));
}
//# sourceMappingURL=property-editor.js.map