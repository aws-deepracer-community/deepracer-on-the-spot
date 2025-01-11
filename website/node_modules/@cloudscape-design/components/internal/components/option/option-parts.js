// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import styles from './styles.css.js';
import clsx from 'clsx';
import React from 'react';
import InternalIcon from '../../../icon/internal';
import HighlightMatch from './highlight-match';
export const Label = ({ label, prefix, highlightText, triggerVariant }) => (React.createElement("span", { className: clsx(styles.label, triggerVariant && styles['trigger-variant']) },
    prefix && (React.createElement("span", { className: clsx(styles['label-prefix'], triggerVariant && styles['trigger-variant']) },
        prefix,
        " ")),
    React.createElement(HighlightMatch, { str: label, highlightText: highlightText })));
export const LabelTag = ({ labelTag, highlightText, triggerVariant }) => labelTag ? (React.createElement("span", { className: clsx(styles['label-tag'], triggerVariant && styles['trigger-variant']) },
    React.createElement(HighlightMatch, { str: labelTag, highlightText: highlightText }))) : null;
export const Description = ({ description, highlightedOption, highlightText, selectedOption, triggerVariant, }) => description ? (React.createElement("span", { className: clsx(styles.description, {
        [styles['trigger-variant']]: triggerVariant,
        [styles.highlighted]: highlightedOption,
        [styles.selected]: selectedOption,
    }) },
    React.createElement(HighlightMatch, { str: description, highlightText: highlightText }))) : null;
export const Tags = ({ tags, highlightedOption, highlightText, selectedOption, triggerVariant }) => tags ? (React.createElement("span", { className: clsx(styles.tags, {
        [styles.highlighted]: highlightedOption,
        [styles.selected]: selectedOption,
    }) }, tags.map((tag, idx) => (React.createElement("span", { key: idx, className: clsx(styles.tag, triggerVariant && styles['trigger-variant']) },
    React.createElement(HighlightMatch, { str: tag, highlightText: highlightText })))))) : null;
export const FilteringTags = ({ filteringTags, highlightedOption, highlightText, selectedOption, triggerVariant, }) => {
    if (!highlightText || !filteringTags) {
        return null;
    }
    const searchElement = highlightText.toLowerCase();
    return (React.createElement("span", { className: clsx(styles.tags, {
            [styles.highlighted]: highlightedOption,
            [styles.selected]: selectedOption,
        }) }, filteringTags.map((filteringTag, key) => {
        const match = filteringTag.toLowerCase().indexOf(searchElement) !== -1;
        if (match) {
            return (React.createElement("span", { className: clsx(styles.tag, triggerVariant && styles['trigger-variant']), key: key, "aria-disabled": true },
                React.createElement(HighlightMatch, { str: filteringTag, highlightText: highlightText })));
        }
        return null;
    })));
};
export const OptionIcon = (props) => {
    if (!props.name && !props.url && !props.svg) {
        return null;
    }
    return (React.createElement("span", { className: clsx(styles.icon, props.size === 'big' && [styles[`icon-size-big`]]) },
        React.createElement(InternalIcon, Object.assign({}, props))));
};
//# sourceMappingURL=option-parts.js.map