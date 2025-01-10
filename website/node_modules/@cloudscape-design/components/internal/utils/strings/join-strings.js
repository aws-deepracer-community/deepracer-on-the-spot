// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Joins strings with a whitespace, discarding empty strings. Useful to combine multiple aria-labels.
 */
export function joinStrings(...strings) {
    return strings.filter(Boolean).join(' ') || undefined;
}
//# sourceMappingURL=join-strings.js.map