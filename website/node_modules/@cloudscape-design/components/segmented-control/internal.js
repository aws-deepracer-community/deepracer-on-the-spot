import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import InternalSelect from '../select/internal';
import InternalFormField from '../form-field/internal';
import InternalSegmentedControlComponent from './internal-segmented-control';
import { getBaseProps } from '../internal/base-component';
import { fireNonCancelableEvent } from '../internal/events';
import styles from './styles.css.js';
export default function InternalSegmentedControl(_a) {
    var { selectedId, options, label, ariaLabelledby, onChange, __internalRootRef = null } = _a, props = __rest(_a, ["selectedId", "options", "label", "ariaLabelledby", "onChange", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    const selectOptions = (options || []).map(option => {
        const label = option.text || option.iconAlt;
        return Object.assign(Object.assign({}, option), { label, value: option.id });
    });
    const selectedOptions = selectOptions.filter(option => {
        return option.value === selectedId;
    });
    const currentSelectedOption = selectedOptions.length ? selectedOptions[0] : null;
    const selectProps = {
        options: selectOptions,
        selectedOption: currentSelectedOption,
        triggerVariant: 'option',
        onChange: event => fireNonCancelableEvent(onChange, { selectedId: event.detail.selectedOption.value }),
    };
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement(InternalSegmentedControlComponent, { selectedId: selectedId, options: options, label: label, ariaLabelledby: ariaLabelledby, onChange: onChange }),
        React.createElement("div", { className: styles.select },
            ariaLabelledby && React.createElement(InternalSelect, Object.assign({}, selectProps, { ariaLabelledby: ariaLabelledby })),
            !ariaLabelledby && label && (React.createElement(InternalFormField, { label: label, stretch: true },
                React.createElement(InternalSelect, Object.assign({}, selectProps)))),
            !ariaLabelledby && !label && React.createElement(InternalSelect, Object.assign({}, selectProps)))));
}
//# sourceMappingURL=internal.js.map