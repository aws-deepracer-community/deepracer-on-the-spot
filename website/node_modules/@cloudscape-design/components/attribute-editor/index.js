import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAttributeEditor from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
const AttributeEditor = React.forwardRef((_a, ref) => {
    var { items = [], isItemRemovable = () => true } = _a, props = __rest(_a, ["items", "isItemRemovable"]);
    const baseComponentProps = useBaseComponent('AttributeEditor');
    return (React.createElement(InternalAttributeEditor, Object.assign({ items: items, isItemRemovable: isItemRemovable }, props, baseComponentProps, { ref: ref })));
});
applyDisplayName(AttributeEditor, 'AttributeEditor');
export default AttributeEditor;
//# sourceMappingURL=index.js.map