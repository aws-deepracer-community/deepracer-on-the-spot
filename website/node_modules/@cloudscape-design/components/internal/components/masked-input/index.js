import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState, useLayoutEffect } from 'react';
import { useMergeRefs } from '../../hooks/use-merge-refs';
import { getBaseProps } from '../../base-component';
import { fireCancelableEvent, fireNonCancelableEvent } from '../../events';
import { useFormFieldContext } from '../../context/form-field-context';
import InternalInput from '../../../input/internal';
import useMask from './use-mask';
import MaskFormat from './utils/mask-format';
const MaskedInput = React.forwardRef((_a, ref) => {
    var { value, onBlur, onChange, onKeyDown, mask, autofix = false, disableAutocompleteOnBlur = false } = _a, rest = __rest(_a, ["value", "onBlur", "onChange", "onKeyDown", "mask", "autofix", "disableAutocompleteOnBlur"]);
    const baseProps = getBaseProps(rest);
    const formFieldContext = useFormFieldContext(rest);
    const inputRef = React.useRef(null);
    const [cursorPosition, setCursorPosition] = useState(null);
    useLayoutEffect(() => {
        var _a;
        if (cursorPosition !== null) {
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange(cursorPosition, cursorPosition);
        }
    }, [cursorPosition, inputRef]);
    const _b = useMask({
        format: new MaskFormat(mask),
        value,
        inputRef,
        autofix,
        disableAutocompleteOnBlur,
        onChange: (value) => !rest.readOnly && fireNonCancelableEvent(onChange, { value }),
        onKeyDown: (event) => !rest.readOnly && onKeyDown && fireCancelableEvent(onKeyDown, event.detail, event),
        onBlur: () => fireNonCancelableEvent(onBlur),
        setPosition: setCursorPosition,
    }), { onPaste } = _b, maskProps = __rest(_b, ["onPaste"]);
    const inputProps = Object.assign(Object.assign(Object.assign(Object.assign({}, rest), baseProps), formFieldContext), maskProps);
    const mergedRef = useMergeRefs(ref, inputRef);
    return (React.createElement(InternalInput, Object.assign({}, inputProps, { ref: mergedRef, __nativeAttributes: {
            onPaste,
        } })));
});
export { useMask };
export default MaskedInput;
//# sourceMappingURL=index.js.map