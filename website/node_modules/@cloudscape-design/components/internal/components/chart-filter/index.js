import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useCallback, memo } from 'react';
import InternalFormField from '../../../form-field/internal';
import InternalMultiselect from '../../../multiselect/internal';
import { getBaseProps } from '../../base-component';
import SeriesMarker from '../chart-series-marker';
import { useInternalI18n } from '../../../i18n/context';
import styles from './styles.css.js';
export default memo(ChartFilter);
function ChartFilter(_a) {
    var { series, i18nStrings, selectedSeries, onChange } = _a, restProps = __rest(_a, ["series", "i18nStrings", "selectedSeries", "onChange"]);
    const baseProps = getBaseProps(restProps);
    const className = clsx(baseProps.className, styles.root);
    const i18n = useInternalI18n('[charts]');
    const defaultOptions = series.map((d, i) => ({
        label: d.label,
        value: '' + i,
        datum: d.datum,
        __customIcon: (React.createElement("span", { className: styles['custom-icon-wrapper'] },
            React.createElement(SeriesMarker, { color: d.color, type: d.type }))),
    }));
    const selectedOptions = defaultOptions.filter(option => (selectedSeries === null || selectedSeries === void 0 ? void 0 : selectedSeries.indexOf(option.datum)) !== -1);
    const updateSelection = useCallback(({ detail: { selectedOptions } }) => {
        const selectedSeries = defaultOptions
            .filter(option => selectedOptions.indexOf(option) !== -1)
            .map(option => option.datum);
        onChange(selectedSeries);
    }, [onChange, defaultOptions]);
    return (React.createElement(InternalFormField, Object.assign({}, baseProps, { label: i18n('i18nStrings.filterLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filterLabel), className: className }),
        React.createElement(InternalMultiselect, { placeholder: i18n('i18nStrings.filterPlaceholder', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filterPlaceholder), options: defaultOptions, selectedOptions: selectedOptions, onChange: updateSelection, className: styles['chart-filter'], selectedAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.filterSelectedAriaLabel, hideTokens: true })));
}
//# sourceMappingURL=index.js.map