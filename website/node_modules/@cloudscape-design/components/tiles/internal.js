import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import { useFormFieldContext } from '../internal/context/form-field-context';
import { useUniqueId } from '../internal/hooks/use-unique-id';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { Tile } from './tile';
import useRadioGroupForwardFocus from '../internal/hooks/forward-focus/radio-group';
const COLUMN_TRIGGERS = ['default', 'xxs', 'xs'];
const InternalTiles = React.forwardRef((_a, ref) => {
    var { name, value, items, ariaLabel, ariaRequired, ariaControls, columns, onChange, __internalRootRef = null } = _a, rest = __rest(_a, ["name", "value", "items", "ariaLabel", "ariaRequired", "ariaControls", "columns", "onChange", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const { ariaDescribedby, ariaLabelledby } = useFormFieldContext(rest);
    const generatedName = useUniqueId('awsui-tiles-');
    const [tileRef, tileRefIndex] = useRadioGroupForwardFocus(ref, items, value);
    const [breakpoint, breakpointRef] = useContainerBreakpoints(COLUMN_TRIGGERS);
    const mergedRef = useMergeRefs(breakpointRef, __internalRootRef);
    const columnCount = getColumnCount(items, columns);
    return (React.createElement("div", Object.assign({ role: "radiogroup", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, "aria-required": ariaRequired, "aria-controls": ariaControls }, baseProps, { className: clsx(baseProps.className, styles.root), ref: mergedRef }),
        React.createElement("div", { className: clsx(styles.columns, styles[`column-${columnCount}`]) }, items &&
            items.map((item, index) => (React.createElement(Tile, { ref: index === tileRefIndex ? tileRef : undefined, key: item.value, item: item, selected: item.value === value, name: name || generatedName, breakpoint: breakpoint, onChange: onChange }))))));
});
function getColumnCount(items, columns) {
    if (columns) {
        return columns;
    }
    const nItems = items ? items.length : 0;
    const columnsLookup = {
        0: 1,
        1: 1,
        2: 2,
        4: 2,
        8: 2,
    };
    return columnsLookup[nItems] || 3;
}
export default InternalTiles;
//# sourceMappingURL=internal.js.map