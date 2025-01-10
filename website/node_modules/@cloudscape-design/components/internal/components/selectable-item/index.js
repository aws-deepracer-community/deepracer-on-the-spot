import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef, useLayoutEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.css.js';
import { getBaseProps } from '../../base-component';
const SelectableItem = (_a, ref) => {
    var { children: content, ariaSelected, ariaChecked, selected, highlighted, disabled, hasBackground, isParent, isChild, virtualPosition, padBottom, isNextSelected, useInteractiveGroups, screenReaderContent, ariaPosinset, ariaSetsize, highlightType } = _a, restProps = __rest(_a, ["children", "ariaSelected", "ariaChecked", "selected", "highlighted", "disabled", "hasBackground", "isParent", "isChild", "virtualPosition", "padBottom", "isNextSelected", "useInteractiveGroups", "screenReaderContent", "ariaPosinset", "ariaSetsize", "highlightType"]);
    const _b = getBaseProps(restProps), { className } = _b, rest = __rest(_b, ["className"]);
    const classNames = clsx(className, styles['selectable-item'], {
        [styles.selected]: selected,
        [styles.highlighted]: highlighted,
        [styles['has-background']]: hasBackground,
        [styles.parent]: isParent,
        [styles.child]: isChild,
        [styles['is-keyboard']]: highlightType === 'keyboard',
        [styles.disabled]: disabled,
        [styles.virtual]: virtualPosition !== undefined,
        [styles['pad-bottom']]: padBottom,
        [styles['next-item-selected']]: isNextSelected,
        [styles.interactiveGroups]: useInteractiveGroups,
    });
    const contentRef = useRef(null);
    const screenReaderContentRef = useRef(null);
    useLayoutEffect(() => {
        // the state of aria-hidden and announcement is not set back because NVDA+Firefox would announce
        // the item which lost highlight
        // set aria-hidden true when there is announcement content, so that screen reader still announce
        // meaningful content when navigate with screen reader cursor
        // imperatively update to avoid announcement made multiple times when content updates
        if (highlighted && screenReaderContent) {
            if (contentRef.current) {
                contentRef.current.setAttribute('aria-hidden', 'true');
            }
            if (screenReaderContentRef.current) {
                screenReaderContentRef.current.textContent = screenReaderContent;
            }
        }
    }, [highlighted, screenReaderContent, contentRef, screenReaderContentRef]);
    const style = virtualPosition !== undefined
        ? {
            transform: `translateY(${virtualPosition}px)`,
        }
        : undefined;
    const a11yProperties = {
        'aria-disabled': disabled,
    };
    if (isParent && !useInteractiveGroups) {
        a11yProperties['aria-hidden'] = true;
    }
    if (ariaSelected !== undefined) {
        a11yProperties['aria-selected'] = ariaSelected;
    }
    // Safari+VO needs aria-checked for multi-selection. Otherwise it only announces selected option even though another option is highlighted.
    if (ariaChecked !== undefined) {
        a11yProperties['aria-checked'] = ariaChecked;
    }
    if (ariaPosinset && ariaSetsize) {
        a11yProperties['aria-posinset'] = ariaPosinset;
        a11yProperties['aria-setsize'] = ariaSetsize;
    }
    return (React.createElement("li", Object.assign({ role: "option", className: classNames, style: style }, a11yProperties, rest),
        React.createElement("div", { className: styles['option-content'], ref: contentRef }, content),
        React.createElement("div", { className: styles['measure-strut'], ref: ref }),
        React.createElement("div", { className: styles['screenreader-content'], ref: screenReaderContentRef })));
};
export default React.forwardRef(SelectableItem);
//# sourceMappingURL=index.js.map