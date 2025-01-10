import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../../internal/utils/apply-display-name';
import useBaseComponent from '../../internal/hooks/use-base-component';
import InternalTopNavigation from './internal';
/**
 * @beta
 * @version 1.0-beta
 * @deprecated The beta version is unsupported. Use the stable version of the component instead.
 */
export default function TopNavigation(_a) {
    var { utilities = [] } = _a, restProps = __rest(_a, ["utilities"]);
    const baseComponentProps = useBaseComponent('TopNavigation');
    return React.createElement(InternalTopNavigation, Object.assign({}, baseComponentProps, { utilities: utilities }, restProps));
}
applyDisplayName(TopNavigation, 'TopNavigation');
//# sourceMappingURL=index.js.map