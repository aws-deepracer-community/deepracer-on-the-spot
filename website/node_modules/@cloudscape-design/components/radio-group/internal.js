import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import RadioButton from './radio-button';
import styles from './styles.css.js';
import { useFormFieldContext } from '../internal/context/form-field-context';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import useRadioGroupForwardFocus from '../internal/hooks/forward-focus/radio-group';
const InternalRadioGroup = React.forwardRef((_a, ref) => {
    var { name, value, items, ariaLabel, ariaRequired, ariaControls, onChange, __internalRootRef = null } = _a, props = __rest(_a, ["name", "value", "items", "ariaLabel", "ariaRequired", "ariaControls", "onChange", "__internalRootRef"]);
    const { ariaDescribedby, ariaLabelledby } = useFormFieldContext(props);
    const baseProps = getBaseProps(props);
    const generatedName = useUniqueId('awsui-radio-');
    const [radioButtonRef, radioButtonRefIndex] = useRadioGroupForwardFocus(ref, items, value);
    return (React.createElement("div", Object.assign({ role: "radiogroup", "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-required": ariaRequired, "aria-controls": ariaControls }, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }), items &&
        items.map((item, index) => (React.createElement(RadioButton, { key: item.value, ref: index === radioButtonRefIndex ? radioButtonRef : undefined, checked: item.value === value, name: name || generatedName, value: item.value, label: item.label, description: item.description, disabled: item.disabled, onChange: onChange, controlId: item.controlId })))));
});
export default InternalRadioGroup;
//# sourceMappingURL=internal.js.map