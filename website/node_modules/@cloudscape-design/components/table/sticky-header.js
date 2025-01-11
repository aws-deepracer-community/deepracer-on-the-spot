// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { StickyHeaderContext } from '../container/use-sticky-header';
import Thead from './thead';
import { useStickyHeader } from './use-sticky-header';
import styles from './styles.css.js';
import { getVisualContextClassname } from '../internal/components/visual-context';
import { getTableRoleProps } from './table-role';
export default forwardRef(StickyHeader);
function StickyHeader({ variant, theadProps, wrapperRef, theadRef, secondaryWrapperRef, onScroll, tableRef, tableHasHeader, contentDensity, tableRole, }, ref) {
    const secondaryTheadRef = useRef(null);
    const secondaryTableRef = useRef(null);
    const { isStuck } = useContext(StickyHeaderContext);
    const [focusedComponent, setFocusedComponent] = useState(null);
    const { scrollToRow, scrollToTop } = useStickyHeader(tableRef, theadRef, secondaryTheadRef, secondaryTableRef, wrapperRef);
    useImperativeHandle(ref, () => ({
        scrollToTop,
        scrollToRow,
        setFocus: setFocusedComponent,
    }));
    return (React.createElement("div", { className: clsx(styles['header-secondary'], styles[`variant-${variant}`], {
            [styles.stuck]: isStuck,
            [styles['table-has-header']]: tableHasHeader,
        }), "aria-hidden": true, 
        // Prevents receiving focus in Firefox. Focus on the overflowing table is sufficient
        // to scroll the table horizontally
        tabIndex: -1, ref: secondaryWrapperRef, onScroll: onScroll },
        React.createElement("table", Object.assign({ className: clsx(styles.table, styles['table-layout-fixed'], contentDensity === 'compact' && getVisualContextClassname('compact-table')), ref: secondaryTableRef }, getTableRoleProps({ tableRole })),
            React.createElement(Thead, Object.assign({ ref: secondaryTheadRef, sticky: true, stuck: isStuck, focusedComponent: focusedComponent }, theadProps)))));
}
//# sourceMappingURL=sticky-header.js.map