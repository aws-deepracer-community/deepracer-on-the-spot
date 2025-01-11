// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function normalizeTimeString(timeString) {
    const parts = timeString.split(':');
    while (parts.length < 3) {
        parts.push('00');
    }
    return parts.join(':');
}
export function joinDateTime(dateString, timeString) {
    return `${dateString}T${timeString}`;
}
export function splitDateTime(dateStr) {
    const [date = '', time = ''] = dateStr.split('T');
    return { date, time };
}
//# sourceMappingURL=join-date-time.js.map