// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalSegmentedControl from './internal';
export default function SegmentedControl(props) {
    const baseComponentProps = useBaseComponent('SegmentedControl');
    return React.createElement(InternalSegmentedControl, Object.assign({}, props, baseComponentProps));
}
applyDisplayName(SegmentedControl, 'SegmentedControl');
//# sourceMappingURL=index.js.map