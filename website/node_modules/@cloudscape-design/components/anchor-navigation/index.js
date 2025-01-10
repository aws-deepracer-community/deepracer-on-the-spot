import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalAnchorNavigation from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
export default function AnchorNavigation(_a) {
    var { scrollSpyOffset = 0 } = _a, props = __rest(_a, ["scrollSpyOffset"]);
    const baseComponentProps = useBaseComponent('AnchorNavigation');
    return React.createElement(InternalAnchorNavigation, Object.assign({ scrollSpyOffset: scrollSpyOffset }, props, baseComponentProps));
}
applyDisplayName(AnchorNavigation, 'AnchorNavigation');
//# sourceMappingURL=index.js.map