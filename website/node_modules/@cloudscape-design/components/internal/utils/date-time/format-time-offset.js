// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { padLeftZeros } from '../strings';
export function formatTimeOffsetISO(isoDate, offsetInMinutes) {
    offsetInMinutes = defaultToLocal(isoDate, offsetInMinutes);
    const { hours, minutes } = getMinutesAndHours(offsetInMinutes);
    const sign = offsetInMinutes < 0 ? '-' : '+';
    const formattedOffset = `${sign}${formatISO2Digits(hours)}:${formatISO2Digits(minutes)}`;
    return formattedOffset;
}
export function formatTimeOffsetLocalized(isoDate, offsetInMinutes) {
    offsetInMinutes = defaultToLocal(isoDate, offsetInMinutes);
    if (offsetInMinutes === 0) {
        return '(UTC)';
    }
    const { hours, minutes } = getMinutesAndHours(offsetInMinutes);
    const sign = offsetInMinutes < 0 ? '-' : '+';
    const formattedMinutes = minutes === 0 ? '' : `:${minutes}`;
    const formattedOffset = `(UTC${sign}${hours}${formattedMinutes})`;
    return formattedOffset;
}
function defaultToLocal(isoDate, offsetInMinutes) {
    return offsetInMinutes !== null && offsetInMinutes !== void 0 ? offsetInMinutes : 0 - new Date(isoDate).getTimezoneOffset();
}
function getMinutesAndHours(minutes) {
    return { hours: Math.floor(Math.abs(minutes) / 60), minutes: Math.abs(minutes % 60) };
}
function formatISO2Digits(n) {
    return padLeftZeros(n.toFixed(0), 2);
}
//# sourceMappingURL=format-time-offset.js.map