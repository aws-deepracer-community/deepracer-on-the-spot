// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import useBaseComponent from '../internal/hooks/use-base-component';
import InternalTextFilter from './internal';
const TextFilter = React.forwardRef((props, ref) => {
    const baseComponentProps = useBaseComponent('TextFilter');
    return React.createElement(InternalTextFilter, Object.assign({}, props, baseComponentProps, { ref: ref }));
});
applyDisplayName(TextFilter, 'TextFilter');
export default TextFilter;
//# sourceMappingURL=index.js.map