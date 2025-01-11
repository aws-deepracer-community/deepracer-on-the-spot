import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalCheckbox from './internal';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
const Checkbox = React.forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    const baseComponentProps = useBaseComponent('Checkbox');
    return React.createElement(InternalCheckbox, Object.assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(Checkbox, 'Checkbox');
export default Checkbox;
//# sourceMappingURL=index.js.map