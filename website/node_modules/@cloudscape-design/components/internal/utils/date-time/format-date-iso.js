// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { formatTimeOffsetISO } from './format-time-offset';
export default function ({ date: isoDate, hideTimeOffset, isDateOnly, timeOffset, }) {
    const formattedOffset = hideTimeOffset || isDateOnly ? '' : formatTimeOffsetISO(isoDate, timeOffset);
    return isoDate + formattedOffset;
}
//# sourceMappingURL=format-date-iso.js.map