// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalSpaceBetween from '../space-between/internal';
import InternalToggle from '../toggle/internal';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import styles from './styles.css.js';
const isVisible = (id, visibleIds) => visibleIds.indexOf(id) !== -1;
const className = (suffix) => ({
    className: styles[`visible-content-${suffix}`],
});
export default function VisibleContentPreference({ title, options, value = [], onChange, }) {
    const idPrefix = useUniqueId('visible-content');
    const flatOptionsIds = options.reduce((ids, group) => [...ids, ...group.options.reduce((groupIds, option) => [...groupIds, option.id], [])], []);
    const onToggle = (id) => {
        if (!isVisible(id, value)) {
            onChange([...value, id].sort((firstId, secondId) => flatOptionsIds.indexOf(firstId) - flatOptionsIds.indexOf(secondId)));
        }
        else {
            onChange(value.filter(currentId => currentId !== id));
        }
    };
    const selectionOption = (option, optionGroupIndex, optionIndex) => {
        const labelId = `${idPrefix}-${optionGroupIndex}-${optionIndex}`;
        return (React.createElement("div", Object.assign({ key: optionIndex }, className('option')),
            React.createElement("label", Object.assign({}, className('option-label'), { htmlFor: labelId }), option.label),
            React.createElement("div", Object.assign({}, className('toggle')),
                React.createElement(InternalToggle, { checked: isVisible(option.id, value), onChange: () => onToggle(option.id), disabled: option.editable === false, controlId: labelId }))));
    };
    const outerGroupLabelId = `${idPrefix}-outer`;
    return (React.createElement("div", { className: styles['visible-content'] },
        React.createElement("h3", Object.assign({}, className('title'), { id: outerGroupLabelId }), title),
        React.createElement(InternalSpaceBetween, Object.assign({}, className('groups'), { size: "xs" }), options.map((optionGroup, optionGroupIndex) => {
            const groupLabelId = `${idPrefix}-${optionGroupIndex}`;
            return (React.createElement("div", Object.assign({ key: optionGroupIndex }, className('group'), { role: "group", "aria-labelledby": `${outerGroupLabelId} ${groupLabelId}` }),
                React.createElement("div", Object.assign({}, className('group-label'), { id: groupLabelId }), optionGroup.label),
                React.createElement("div", null, optionGroup.options.map((option, optionIndex) => selectionOption(option, optionGroupIndex, optionIndex)))));
        }))));
}
//# sourceMappingURL=visible-content.js.map