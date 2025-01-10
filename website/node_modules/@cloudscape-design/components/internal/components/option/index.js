import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { Label, LabelTag, Description, Tags, FilteringTags, OptionIcon } from './option-parts';
import { getBaseProps } from '../../base-component';
import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
import { isDevelopment } from '../../is-development';
function validateStringValue(value, propertyName) {
    if (typeof value !== 'undefined' && typeof value !== 'string') {
        warnOnce('DropdownOption', `This component only supports string values, but "option.${propertyName}" has ${typeof value} type. The component may work incorrectly.`);
    }
}
const Option = (_a) => {
    var _b, _c, _d, _e;
    var { option, highlightText, triggerVariant = false, isGroupOption = false, isGenericGroup = true, highlightedOption = false, selectedOption = false } = _a, restProps = __rest(_a, ["option", "highlightText", "triggerVariant", "isGroupOption", "isGenericGroup", "highlightedOption", "selectedOption"]);
    if (!option) {
        return null;
    }
    const { disabled } = option;
    const baseProps = getBaseProps(restProps);
    if (isDevelopment) {
        validateStringValue(option.label, 'label');
        validateStringValue(option.description, 'description');
        validateStringValue(option.labelTag, 'labelTag');
        (_b = option.tags) === null || _b === void 0 ? void 0 : _b.forEach((tag, index) => {
            validateStringValue(tag, `tags[${index}]`);
        });
        (_c = option.filteringTags) === null || _c === void 0 ? void 0 : _c.forEach((tag, index) => {
            validateStringValue(tag, `filteringTags[${index}]`);
        });
    }
    const className = clsx(styles.option, disabled && styles.disabled, isGroupOption && styles.parent, highlightedOption && styles.highlighted);
    const icon = option.__customIcon || (React.createElement(OptionIcon, { name: option.iconName, url: option.iconUrl, svg: option.iconSvg, alt: option.iconAlt, size: option.description || option.tags ? 'big' : 'normal' }));
    // The option is conditionally assigned 'title' and 'aria-disabled' attributes to ensure it is viewed as a (generic) group  by assistive technology only when necessary.
    // Omitting the props might be necessary if they are provided on the parent element to avoid nested groups.
    // See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role
    const genericGroupProps = isGenericGroup
        ? {
            title: (_d = option.label) !== null && _d !== void 0 ? _d : option.value,
            'aria-disabled': disabled,
        }
        : undefined;
    return (React.createElement("span", Object.assign({ "data-value": option.value, className: className, lang: option.lang }, genericGroupProps, baseProps),
        icon,
        React.createElement("span", { className: clsx(styles.content) },
            React.createElement("span", { className: clsx(styles['label-content']) },
                React.createElement(Label, { label: (_e = option.label) !== null && _e !== void 0 ? _e : option.value, prefix: option.__labelPrefix, highlightText: highlightText, triggerVariant: triggerVariant }),
                React.createElement(LabelTag, { labelTag: option.labelTag, highlightText: highlightText, triggerVariant: triggerVariant })),
            React.createElement(Description, { description: option.description, highlightedOption: highlightedOption, selectedOption: selectedOption, highlightText: highlightText, triggerVariant: triggerVariant }),
            React.createElement(Tags, { tags: option.tags, highlightedOption: highlightedOption, selectedOption: selectedOption, highlightText: highlightText, triggerVariant: triggerVariant }),
            React.createElement(FilteringTags, { filteringTags: option.filteringTags, highlightedOption: highlightedOption, selectedOption: selectedOption, highlightText: highlightText, triggerVariant: triggerVariant }))));
};
export default Option;
//# sourceMappingURL=index.js.map