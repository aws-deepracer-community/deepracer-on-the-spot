// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export function filterOptions(options, searchText = '') {
    if (!searchText) {
        return options;
    }
    const filtered = [];
    for (const option of options) {
        if (isGroup(option)) {
            const childOptions = filterOptions(option.options, searchText);
            if (childOptions.length > 0) {
                filtered.push(Object.assign(Object.assign({}, option), { options: childOptions }));
            }
        }
        else if (matchSingleOption(option, searchText)) {
            filtered.push(option);
        }
    }
    return filtered;
}
function isGroup(optionOrGroup) {
    return 'options' in optionOrGroup;
}
function matchSingleOption(option, searchText) {
    var _a, _b;
    searchText = searchText.toLowerCase();
    const label = ((_a = option.label) !== null && _a !== void 0 ? _a : '').toLowerCase();
    const labelPrefix = (_b = option.__labelPrefix) !== null && _b !== void 0 ? _b : '';
    const value = (option.value ? option.value.slice(labelPrefix.length) : '').toLowerCase();
    return label.indexOf(searchText) !== -1 || value.indexOf(searchText) !== -1;
}
//# sourceMappingURL=filter-options.js.map