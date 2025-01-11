// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { getWeekStartByLocale } from 'weekstart';
export function normalizeStartOfWeek(startOfWeek, locale) {
    return (typeof startOfWeek === 'number' ? startOfWeek % 7 : getWeekStartByLocale(locale));
}
//# sourceMappingURL=normalize-start-of-week.js.map