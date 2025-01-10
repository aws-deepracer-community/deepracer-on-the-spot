// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function getMatchableLocales(ietfLanguageTag) {
    const parts = ietfLanguageTag.split('-');
    if (parts.length === 1) {
        return [ietfLanguageTag];
    }
    const localeStrings = [];
    for (let i = parts.length; i > 0; i--) {
        localeStrings.push(parts.slice(0, i).join('-'));
    }
    return localeStrings;
}
//# sourceMappingURL=get-matchable-locales.js.map