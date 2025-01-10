// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { getBaseProps } from '../../base-component/index.js';
import InternalBox from '../../../box/internal.js';
import InternalSpaceBetween from '../../../space-between/internal.js';
export const ChartWrapper = forwardRef((_a, ref) => {
    var { defaultFilter, additionalFilters, reserveFilterSpace, reserveLegendSpace, chartStatus, chart, legend, onBlur, contentClassName, contentMinHeight, fitHeight } = _a, props = __rest(_a, ["defaultFilter", "additionalFilters", "reserveFilterSpace", "reserveLegendSpace", "chartStatus", "chart", "legend", "onBlur", "contentClassName", "contentMinHeight", "fitHeight"]);
    const baseProps = getBaseProps(props);
    const filtersNode = (defaultFilter || additionalFilters) && (React.createElement(InternalBox, { className: styles['filter-container'], margin: { bottom: 'l' } },
        React.createElement(InternalSpaceBetween, { size: "l", direction: "horizontal", className: clsx({ [styles['has-default-filter']]: !!defaultFilter }) },
            defaultFilter,
            additionalFilters)));
    const legendNode = legend && React.createElement(InternalBox, { margin: { top: 'm' } }, legend);
    if (fitHeight) {
        return (React.createElement("div", Object.assign({ ref: ref }, baseProps, { className: clsx(baseProps.className, styles.wrapper, styles['wrapper--fit-height']), onBlur: onBlur }),
            React.createElement("div", { className: clsx(styles['inner-wrapper'], styles['inner-wrapper--fit-height']) },
                filtersNode,
                React.createElement("div", { className: clsx(styles.content, contentClassName, {
                        [styles['content--reserve-filter']]: reserveFilterSpace,
                        [styles['content--reserve-legend']]: reserveLegendSpace,
                        [styles['content--fit-height']]: true,
                    }) },
                    chartStatus,
                    chart),
                legendNode)));
    }
    return (React.createElement("div", Object.assign({ ref: ref }, baseProps, { className: clsx(baseProps.className, styles.wrapper), onBlur: onBlur }),
        filtersNode,
        React.createElement("div", { className: clsx(styles.content, contentClassName, {
                [styles['content--reserve-filter']]: reserveFilterSpace,
                [styles['content--reserve-legend']]: reserveLegendSpace,
            }), style: { minHeight: contentMinHeight } },
            chartStatus,
            chart),
        legendNode));
});
//# sourceMappingURL=index.js.map