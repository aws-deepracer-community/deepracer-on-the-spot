// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { useFormFieldContext } from '../../internal/context/form-field-context';
import InternalInput from '../../input/internal';
export const SearchInput = React.forwardRef((props, ref) => {
    const formFieldContext = useFormFieldContext(props);
    return React.createElement(InternalInput, Object.assign({ type: "search" }, props, formFieldContext, { ref: ref }));
});
//# sourceMappingURL=search-input.js.map