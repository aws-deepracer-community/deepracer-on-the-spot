import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import Option from '../../internal/components/option';
import SelectableItem from '../../internal/components/selectable-item';
import { getBaseProps } from '../../internal/base-component';
import CheckboxIcon from '../../internal/components/checkbox-icon';
const MultiSelectItem = (_a, ref) => {
    var { option, highlighted, selected, filteringValue, hasCheckbox, virtualPosition, padBottom, isNextSelected, indeterminate, screenReaderContent, ariaPosinset, ariaSetsize, highlightType } = _a, restProps = __rest(_a, ["option", "highlighted", "selected", "filteringValue", "hasCheckbox", "virtualPosition", "padBottom", "isNextSelected", "indeterminate", "screenReaderContent", "ariaPosinset", "ariaSetsize", "highlightType"]);
    const baseProps = getBaseProps(restProps);
    const isParent = option.type === 'parent';
    const isChild = option.type === 'child';
    const wrappedOption = option.option;
    const disabled = option.disabled || wrappedOption.disabled;
    const className = clsx(styles.item, {
        [styles.disabled]: disabled,
    });
    return (React.createElement(SelectableItem, Object.assign({ ariaChecked: isParent && indeterminate ? 'mixed' : Boolean(selected), selected: selected, isNextSelected: isNextSelected, highlighted: highlighted, disabled: disabled, isParent: isParent, isChild: isChild, highlightType: highlightType, ref: ref, virtualPosition: virtualPosition, padBottom: padBottom, useInteractiveGroups: true, screenReaderContent: screenReaderContent, ariaPosinset: ariaPosinset, ariaSetsize: ariaSetsize }, baseProps),
        React.createElement("div", { className: className },
            hasCheckbox && (React.createElement("div", { className: styles.checkbox },
                React.createElement(CheckboxIcon, { checked: selected, indeterminate: isParent && indeterminate, disabled: option.disabled }))),
            React.createElement(Option, { option: Object.assign(Object.assign({}, wrappedOption), { disabled }), highlightedOption: highlighted, selectedOption: selected, highlightText: filteringValue, isGroupOption: isParent }))));
};
export default React.memo(React.forwardRef(MultiSelectItem));
//# sourceMappingURL=multiselect-item.js.map