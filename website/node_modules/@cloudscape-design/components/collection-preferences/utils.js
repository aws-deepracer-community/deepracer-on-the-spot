// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import clsx from 'clsx';
import InternalCheckbox from '../checkbox/internal';
import InternalColumnLayout from '../column-layout/internal';
import InternalFormField from '../form-field/internal';
import InternalRadioGroup from '../radio-group/internal';
import InternalSpaceBetween from '../space-between/internal';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import styles from './styles.css.js';
import { useInternalI18n } from '../i18n/context';
export const copyPreferences = ({ pageSize, wrapLines, stripedRows, contentDensity, visibleContent, contentDisplay, stickyColumns, custom, }) => ({
    pageSize,
    wrapLines,
    stripedRows,
    contentDensity,
    visibleContent,
    contentDisplay,
    stickyColumns,
    custom,
});
export const mergePreferences = (newPref, oldPref) => {
    const newObj = Object.assign({}, oldPref);
    const prefNames = [
        'pageSize',
        'wrapLines',
        'stripedRows',
        'contentDensity',
        'visibleContent',
        'custom',
        'contentDisplay',
        'stickyColumns',
    ];
    for (const prefName of prefNames) {
        if (newPref[prefName] !== undefined) {
            newObj[prefName] = newPref[prefName];
        }
    }
    return newObj;
};
export const ModalContentLayout = ({ left, right }) => {
    const [breakpoint, ref] = useContainerBreakpoints(['xs']);
    const smallContainer = breakpoint === 'default';
    if (smallContainer) {
        return (React.createElement("div", { ref: ref },
            left && React.createElement("div", null, left),
            right && React.createElement("div", { className: clsx(left && styles['second-column-small']) }, right)));
    }
    const columns = left && right ? 2 : 1;
    return (React.createElement("div", { ref: ref },
        React.createElement(InternalColumnLayout, { columns: columns, variant: "text-grid" },
            left && React.createElement("div", null, left),
            right && React.createElement("div", null, right))));
};
export const PageSizePreference = ({ title, options, value, onChange }) => {
    const i18n = useInternalI18n('collection-preferences');
    return (React.createElement("div", { className: styles['page-size'] },
        React.createElement(InternalFormField, { label: i18n('pageSizePreference.title', title), stretch: true, className: styles['page-size-form-field'] },
            React.createElement(InternalRadioGroup, { className: styles['page-size-radio-group'], value: `${value}`, items: options.map(({ label, value }) => ({ label, value: `${value}` })), onChange: ({ detail }) => onChange(parseInt(detail.value, 10)) }))));
};
export const WrapLinesPreference = ({ label, description, value, onChange }) => {
    const i18n = useInternalI18n('collection-preferences');
    return (React.createElement(InternalCheckbox, { checked: !!value, description: i18n('wrapLinesPreference.description', description), onChange: ({ detail }) => onChange(detail.checked), className: styles['wrap-lines'] }, i18n('wrapLinesPreference.label', label)));
};
export function StripedRowsPreference({ label, description, value, onChange }) {
    const i18n = useInternalI18n('collection-preferences');
    return (React.createElement(InternalCheckbox, { checked: !!value, description: i18n('stripedRowsPreference.description', description), onChange: ({ detail }) => onChange(detail.checked), className: styles['striped-rows'] }, i18n('stripedRowsPreference.label', label)));
}
export const ContentDensityPreference = ({ label, description, value, onChange }) => {
    const i18n = useInternalI18n('collection-preferences');
    return (React.createElement(InternalCheckbox, { checked: value === 'compact', description: i18n('contentDensityPreference.description', description), onChange: ({ detail }) => onChange(detail.checked ? 'compact' : 'comfortable'), className: styles['content-density'] }, i18n('contentDensityPreference.label', label)));
};
const StickyPreference = ({ firstOrLast, preference, value, onChange }) => {
    const { title, description, options } = preference;
    return (React.createElement("div", { className: styles[`sticky-columns-${firstOrLast}`] },
        React.createElement(InternalFormField, { className: styles['sticky-columns-form-field'], label: title, description: description },
            React.createElement(InternalRadioGroup, { className: styles['sticky-columns-radio-group'], value: typeof value !== 'undefined' ? `${value}` : null, items: options.map(({ label, value }) => ({ label, value: `${value}` })), onChange: ({ detail }) => onChange(Number(detail.value)) }))));
};
export const StickyColumnsPreference = ({ firstColumns, lastColumns, onChange, value, }) => {
    return (React.createElement(InternalSpaceBetween, { className: styles['sticky-columns'], size: "l" },
        firstColumns && (React.createElement(StickyPreference, { firstOrLast: "first", preference: firstColumns, value: value === null || value === void 0 ? void 0 : value.first, onChange: newValue => onChange(Object.assign(Object.assign({}, value), { first: newValue })) })),
        lastColumns && (React.createElement(StickyPreference, { firstOrLast: "last", preference: lastColumns, value: value === null || value === void 0 ? void 0 : value.last, onChange: newValue => onChange(Object.assign(Object.assign({}, value), { last: newValue })) }))));
};
export const CustomPreference = ({ value, customPreference, onChange }) => {
    const [customState, setCustomState] = useState(value);
    if (customPreference) {
        return (React.createElement("div", { className: styles.custom }, customPreference(customState, value => {
            // prevent value to be treated as a functional callback
            setCustomState(() => value);
            onChange(value);
        })));
    }
    return null;
};
//# sourceMappingURL=utils.js.map