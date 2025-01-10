// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function parseDate(value, strict = false) {
    const [yearString, monthString, dayString] = value.split('-');
    const year = Number(yearString);
    const month = Number(monthString);
    const day = Number(dayString);
    if (strict) {
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            return null;
        }
    }
    return new Date(year, (month || 1) - 1, day || 1);
}
//# sourceMappingURL=parse-date.js.map