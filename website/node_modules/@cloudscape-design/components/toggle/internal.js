import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import AbstractSwitch from '../internal/components/abstract-switch';
import useForwardFocus from '../internal/hooks/forward-focus';
import { fireNonCancelableEvent } from '../internal/events';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import { useFormFieldContext } from '../internal/context/form-field-context';
const InternalToggle = React.forwardRef((_a, ref) => {
    var { controlId, checked, name, disabled, children, description, ariaLabel, ariaControls, onFocus, onBlur, onChange, __internalRootRef = null } = _a, rest = __rest(_a, ["controlId", "checked", "name", "disabled", "children", "description", "ariaLabel", "ariaControls", "onFocus", "onBlur", "onChange", "__internalRootRef"]);
    const { ariaDescribedby, ariaLabelledby } = useFormFieldContext(rest);
    const baseProps = getBaseProps(rest);
    const checkboxRef = useRef(null);
    useForwardFocus(ref, checkboxRef);
    return (React.createElement(AbstractSwitch, Object.assign({}, baseProps, { className: clsx(styles.root, baseProps.className), controlClassName: clsx(styles['toggle-control'], {
            [styles['toggle-control-checked']]: checked,
            [styles['toggle-control-disabled']]: disabled,
        }), outlineClassName: styles.outline, controlId: controlId, disabled: disabled, label: children, description: description, descriptionBottomPadding: true, ariaLabel: ariaLabel, ariaLabelledby: ariaLabelledby, ariaDescribedby: ariaDescribedby, ariaControls: ariaControls, nativeControl: nativeControlProps => (React.createElement("input", Object.assign({}, nativeControlProps, { ref: checkboxRef, type: "checkbox", checked: checked, name: name, onFocus: () => fireNonCancelableEvent(onFocus), onBlur: () => fireNonCancelableEvent(onBlur), 
            // empty handler to suppress React controllability warning
            onChange: () => { } }))), onClick: () => {
            var _a;
            (_a = checkboxRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            fireNonCancelableEvent(onChange, { checked: !checked });
        }, styledControl: 
        /*Using span, not div for HTML validity*/
        React.createElement("span", { className: clsx(styles['toggle-handle'], {
                [styles['toggle-handle-checked']]: checked,
                [styles['toggle-handle-disabled']]: disabled,
            }) }), __internalRootRef: __internalRootRef })));
});
export default InternalToggle;
//# sourceMappingURL=internal.js.map