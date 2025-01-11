import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalInput from '../../input/internal';
import styles from './styles.css.js';
const Filter = React.forwardRef((_a, ref) => {
    var { filteringType } = _a, filterProps = __rest(_a, ["filteringType"]);
    if (filteringType === 'none') {
        return null;
    }
    return (React.createElement(InternalInput, Object.assign({ ref: ref, type: "visualSearch", className: styles.filter, autoComplete: false, disableBrowserAutocorrect: true, invalid: false, __noBorderRadius: true }, filterProps, { __nativeAttributes: Object.assign({ 'aria-expanded': true, 'aria-haspopup': true, role: 'combobox', autoCorrect: 'off', autoCapitalize: 'off' }, filterProps.__nativeAttributes) })));
});
export default Filter;
//# sourceMappingURL=filter.js.map