// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalToggle from './internal';
const Toggle = React.forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('Toggle');
    return React.createElement(InternalToggle, Object.assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(Toggle, 'Toggle');
export default Toggle;
//# sourceMappingURL=index.js.map