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
import InternalIcon from '../../icon/internal.js';
const Item = (_a, ref) => {
    var { option, highlighted, selected, filteringValue, hasCheckbox, virtualPosition, padBottom, isNextSelected, screenReaderContent, ariaPosinset, ariaSetsize, highlightType } = _a, restProps = __rest(_a, ["option", "highlighted", "selected", "filteringValue", "hasCheckbox", "virtualPosition", "padBottom", "isNextSelected", "screenReaderContent", "ariaPosinset", "ariaSetsize", "highlightType"]);
    const baseProps = getBaseProps(restProps);
    const isParent = option.type === 'parent';
    const isChild = option.type === 'child';
    const wrappedOption = option.option;
    const disabled = option.disabled || wrappedOption.disabled;
    return (React.createElement(SelectableItem, Object.assign({ ariaSelected: Boolean(selected), selected: selected, isNextSelected: isNextSelected, highlighted: highlighted, disabled: option.disabled, isParent: isParent, isChild: isChild, ref: ref, virtualPosition: virtualPosition, padBottom: padBottom, screenReaderContent: screenReaderContent, ariaPosinset: ariaPosinset, ariaSetsize: ariaSetsize, highlightType: highlightType }, baseProps),
        React.createElement("div", { className: clsx(styles.item, !isParent && wrappedOption.labelTag && styles['show-label-tag']) },
            hasCheckbox && !isParent && (React.createElement("div", { className: styles.checkbox },
                React.createElement(CheckboxIcon, { checked: selected || false, disabled: option.disabled }))),
            isParent ? (React.createElement("span", null, wrappedOption.label || wrappedOption.value)) : (React.createElement(Option, { option: Object.assign(Object.assign({}, wrappedOption), { disabled }), highlightedOption: highlighted, selectedOption: selected, highlightText: filteringValue })),
            !hasCheckbox && !isParent && selected && (React.createElement("div", { className: styles['selected-icon'] },
                React.createElement(InternalIcon, { name: "check" }))))));
};
export default React.memo(React.forwardRef(Item));
//# sourceMappingURL=item.js.map