// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import ScreenreaderOnly from '../../internal/components/screenreader-only';
import { renderDayName } from '../utils/intl';
import styles from '../styles.css.js';
export default function CalendarGridHeader({ locale, rows }) {
    return (React.createElement("thead", null,
        React.createElement("tr", null, rows[0]
            .map(date => date.getDay())
            .map(dayIndex => (React.createElement("th", { key: dayIndex, scope: "col", className: clsx(styles['calendar-grid-cell'], styles['calendar-date-header']) },
            React.createElement("span", { "aria-hidden": "true" }, renderDayName(locale, dayIndex, 'short')),
            React.createElement(ScreenreaderOnly, null, renderDayName(locale, dayIndex, 'long'))))))));
}
//# sourceMappingURL=calendar-grid-header.js.map