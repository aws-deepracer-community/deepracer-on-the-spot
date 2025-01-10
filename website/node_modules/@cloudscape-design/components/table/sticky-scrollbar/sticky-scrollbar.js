// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { forwardRef } from 'react';
import { useStickyScrollbar } from './use-sticky-scrollbar';
import { useMergeRefs } from '../../internal/hooks/use-merge-refs';
import { useAppLayoutContext } from '../../internal/context/app-layout-context';
import clsx from 'clsx';
import styles from './styles.css.js';
import { browserScrollbarSize } from '../../internal/utils/browser-scrollbar-size';
import { useVisualRefresh } from '../../internal/hooks/use-visual-mode';
export default forwardRef(StickyScrollbar);
function StickyScrollbar({ wrapperRef, tableRef, onScroll, hasStickyColumns }, ref) {
    const isVisualRefresh = useVisualRefresh();
    const scrollbarRef = React.useRef(null);
    const scrollbarContentRef = React.useRef(null);
    const mergedRef = useMergeRefs(ref, scrollbarRef);
    /**
     * If the height of the scrollbar is 0, we're likely on a platform that uses
     * overlay scrollbars (e.g. Mac).
     */
    const offsetScrollbar = hasStickyColumns || browserScrollbarSize().height === 0;
    /**
     * Use the appropriate AppLayout context (Classic or Visual Refresh) to determine
     * the offsetBottom value to be used in the useStickyScrollbar hook.
     */
    const { stickyOffsetBottom } = useAppLayoutContext();
    useStickyScrollbar(scrollbarRef, scrollbarContentRef, tableRef, wrapperRef, stickyOffsetBottom, offsetScrollbar);
    return (React.createElement("div", { ref: mergedRef, className: clsx(styles['sticky-scrollbar'], offsetScrollbar && styles['sticky-scrollbar-offset'], isVisualRefresh && styles['is-visual-refresh']), onScroll: onScroll },
        React.createElement("div", { ref: scrollbarContentRef, className: styles['sticky-scrollbar-content'] })));
}
//# sourceMappingURL=sticky-scrollbar.js.map