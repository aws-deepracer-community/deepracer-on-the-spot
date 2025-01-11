// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useInternalI18n } from '../i18n/context.js';
import { getDateLabel, renderMonthAndYear } from './utils/intl';
export default function useCalendarLabels({ granularity, locale, i18nStrings, previousMonthAriaLabel, nextMonthAriaLabel, todayAriaLabel, }) {
    var _a, _b, _c;
    const i18n = useInternalI18n('calendar');
    const isMonthPicker = granularity === 'month';
    const previousButtonLabel = isMonthPicker
        ? i18n('i18nStrings.previousYearAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.previousYearAriaLabel)
        : i18n('previousMonthAriaLabel', (_a = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.previousMonthAriaLabel) !== null && _a !== void 0 ? _a : previousMonthAriaLabel);
    const nextButtonLabel = isMonthPicker
        ? i18n('i18nStrings.nextYearAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.nextYearAriaLabel)
        : i18n('nextMonthAriaLabel', (_b = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.nextMonthAriaLabel) !== null && _b !== void 0 ? _b : nextMonthAriaLabel);
    const currentDateLabel = isMonthPicker
        ? i18n('i18nStrings.currentMonthAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.currentMonthAriaLabel)
        : i18n('todayAriaLabel', (_c = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.todayAriaLabel) !== null && _c !== void 0 ? _c : todayAriaLabel);
    const renderDate = (date) => isMonthPicker ? date.toLocaleString(locale, { month: 'short' }) : date.getDate().toString();
    const renderDateAnnouncement = (date, isCurrentDate) => {
        const formattedDate = isMonthPicker ? renderMonthAndYear(locale, date) : getDateLabel(locale, date, 'short');
        if (isCurrentDate && currentDateLabel) {
            return formattedDate + '. ' + currentDateLabel;
        }
        return formattedDate;
    };
    const renderHeaderText = (date) => isMonthPicker ? date.getFullYear().toString() : renderMonthAndYear(locale, date);
    return {
        previousButtonLabel,
        nextButtonLabel,
        renderDate,
        renderDateAnnouncement,
        renderHeaderText,
    };
}
//# sourceMappingURL=use-calendar-labels.js.map