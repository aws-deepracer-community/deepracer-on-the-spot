import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef } from 'react';
import useForwardFocus from '../internal/hooks/forward-focus';
import MaskedInput from '../internal/components/masked-input';
import styles from './styles.css.js';
const getMaskArgs = (format, use24Hour) => {
    const segments = [
        use24Hour ? { min: 0, max: 23, length: 2 } : { min: 1, max: 12, length: 2 },
        { min: 0, max: 59, length: 2 },
        { min: 0, max: 59, length: 2 },
    ];
    return {
        separator: ':',
        segments: segments.slice(0, format.split(':').length),
    };
};
const InternalTimeInput = React.forwardRef((_a, ref) => {
    var { format = 'hh:mm:ss', use24Hour = true, autoComplete = true, __internalRootRef = null } = _a, props = __rest(_a, ["format", "use24Hour", "autoComplete", "__internalRootRef"]);
    const inputRef = useRef(null);
    useForwardFocus(ref, inputRef);
    const maskArgs = getMaskArgs(format, use24Hour);
    return (React.createElement(MaskedInput, Object.assign({}, props, { __internalRootRef: __internalRootRef, ref: inputRef, className: clsx(styles.root, props.className), autoComplete: autoComplete, disableBrowserAutocorrect: true, mask: maskArgs })));
});
export default InternalTimeInput;
//# sourceMappingURL=internal.js.map