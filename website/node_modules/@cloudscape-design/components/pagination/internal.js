import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import InternalIcon from '../icon/internal';
import { fireNonCancelableEvent } from '../internal/events';
import { getBaseProps } from '../internal/base-component';
import styles from './styles.css.js';
import { getPaginationState, range } from './utils';
import { useInternalI18n } from '../i18n/context';
const defaultAriaLabels = {
    nextPageLabel: '',
    paginationLabel: '',
    previousPageLabel: '',
    pageLabel: pageNumber => `${pageNumber}`,
};
function PageButton({ className, ariaLabel, disabled, pageIndex, isCurrent = false, children, onClick, }) {
    function handleClick(event) {
        event.preventDefault();
        onClick(pageIndex);
    }
    return (React.createElement("li", { className: styles['page-item'] },
        React.createElement("button", { className: clsx(className, styles.button, disabled && styles['button-disabled'], isCurrent && styles['button-current']), type: "button", "aria-label": ariaLabel, disabled: disabled, onClick: handleClick, "aria-current": isCurrent }, children)));
}
function PageNumber(_a) {
    var { pageIndex } = _a, rest = __rest(_a, ["pageIndex"]);
    return (React.createElement(PageButton, Object.assign({ className: styles['page-number'], pageIndex: pageIndex }, rest), pageIndex));
}
export default function InternalPagination(_a) {
    var _b, _c, _d;
    var { openEnd, currentPageIndex, ariaLabels, pagesCount, disabled, onChange, onNextPageClick, onPreviousPageClick, __internalRootRef = null } = _a, rest = __rest(_a, ["openEnd", "currentPageIndex", "ariaLabels", "pagesCount", "disabled", "onChange", "onNextPageClick", "onPreviousPageClick", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const { leftDots, leftIndex, rightIndex, rightDots } = getPaginationState(currentPageIndex, pagesCount, openEnd);
    const i18n = useInternalI18n('pagination');
    const paginationLabel = ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.paginationLabel;
    const nextPageLabel = (_b = i18n('ariaLabels.nextPageLabel', ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.nextPageLabel)) !== null && _b !== void 0 ? _b : defaultAriaLabels.nextPageLabel;
    const previousPageLabel = (_c = i18n('ariaLabels.previousPageLabel', ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.previousPageLabel)) !== null && _c !== void 0 ? _c : defaultAriaLabels.previousPageLabel;
    const pageNumberLabelFn = (_d = i18n('ariaLabels.pageLabel', ariaLabels === null || ariaLabels === void 0 ? void 0 : ariaLabels.pageLabel, format => pageNumber => format({ pageNumber }))) !== null && _d !== void 0 ? _d : defaultAriaLabels.pageLabel;
    function handlePrevPageClick(requestedPageIndex) {
        handlePageClick(requestedPageIndex);
        fireNonCancelableEvent(onPreviousPageClick, {
            requestedPageAvailable: true,
            requestedPageIndex: requestedPageIndex,
        });
    }
    function handleNextPageClick(requestedPageIndex) {
        handlePageClick(requestedPageIndex);
        fireNonCancelableEvent(onNextPageClick, {
            requestedPageAvailable: currentPageIndex < pagesCount,
            requestedPageIndex: requestedPageIndex,
        });
    }
    function handlePageClick(requestedPageIndex) {
        fireNonCancelableEvent(onChange, { currentPageIndex: requestedPageIndex });
    }
    return (React.createElement("ul", Object.assign({ "aria-label": paginationLabel }, baseProps, { className: clsx(baseProps.className, styles.root, disabled && styles['root-disabled']), ref: __internalRootRef }),
        React.createElement(PageButton, { className: styles.arrow, pageIndex: currentPageIndex - 1, ariaLabel: previousPageLabel !== null && previousPageLabel !== void 0 ? previousPageLabel : defaultAriaLabels.nextPageLabel, disabled: disabled || currentPageIndex === 1, onClick: handlePrevPageClick },
            React.createElement(InternalIcon, { name: "angle-left", variant: disabled ? 'disabled' : 'normal' })),
        React.createElement(PageNumber, { pageIndex: 1, isCurrent: currentPageIndex === 1, disabled: disabled, ariaLabel: pageNumberLabelFn(1), onClick: handlePageClick }),
        leftDots && React.createElement("li", { className: styles.dots }, "..."),
        range(leftIndex, rightIndex).map(pageIndex => (React.createElement(PageNumber, { key: pageIndex, isCurrent: currentPageIndex === pageIndex, pageIndex: pageIndex, disabled: disabled, ariaLabel: pageNumberLabelFn(pageIndex), onClick: handlePageClick }))),
        rightDots && React.createElement("li", { className: styles.dots }, "..."),
        !openEnd && pagesCount > 1 && (React.createElement(PageNumber, { isCurrent: currentPageIndex === pagesCount, pageIndex: pagesCount, disabled: disabled, ariaLabel: pageNumberLabelFn(pagesCount), onClick: handlePageClick })),
        React.createElement(PageButton, { className: styles.arrow, pageIndex: currentPageIndex + 1, ariaLabel: nextPageLabel !== null && nextPageLabel !== void 0 ? nextPageLabel : defaultAriaLabels.nextPageLabel, disabled: disabled || (!openEnd && (pagesCount === 0 || currentPageIndex === pagesCount)), onClick: handleNextPageClick },
            React.createElement(InternalIcon, { name: "angle-right", variant: disabled ? 'disabled' : 'normal' }))));
}
//# sourceMappingURL=internal.js.map