import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import { Flash } from './flash';
import { TIMEOUT_FOR_ENTERING_ANIMATION } from './constant';
import { TransitionGroup } from 'react-transition-group';
import { Transition } from '../internal/components/transition';
import styles from './styles.css.js';
import { useFlashbar } from './common';
import { useInternalI18n } from '../i18n/context';
export default function NonCollapsibleFlashbar(_a) {
    var { items, i18nStrings } = _a, restProps = __rest(_a, ["items", "i18nStrings"]);
    const { allItemsHaveId, baseProps, breakpoint, isReducedMotion, isVisualRefresh, mergedRef } = useFlashbar(Object.assign({ items }, restProps));
    const i18n = useInternalI18n('flashbar');
    const ariaLabel = i18n('i18nStrings.ariaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.ariaLabel);
    const iconAriaLabels = {
        errorIconAriaLabel: i18n('i18nStrings.errorIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.errorIconAriaLabel),
        inProgressIconAriaLabel: i18n('i18nStrings.inProgressIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.inProgressIconAriaLabel),
        infoIconAriaLabel: i18n('i18nStrings.infoIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.infoIconAriaLabel),
        successIconAriaLabel: i18n('i18nStrings.successIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.successIconAriaLabel),
        warningIconAriaLabel: i18n('i18nStrings.warningIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.warningIconAriaLabel),
    };
    /**
     * All the flash items should have ids so we can identify which DOM element is being
     * removed from the DOM to animate it. Motion will be disabled if any of the provided
     * flash messages does not contain an `id`.
     */
    const motionDisabled = isReducedMotion || !isVisualRefresh || !allItemsHaveId;
    const animateFlash = !isReducedMotion && isVisualRefresh;
    /**
     * If the flashbar is flat and motion is `enabled` then the adding and removing of items
     * from the flashbar will render with visual transitions.
     */
    function renderFlatItemsWithTransitions() {
        if (motionDisabled || !items) {
            return;
        }
        return (
        // This is a proxy for <ul>, so we're not applying a class to another actual component.
        // eslint-disable-next-line react/forbid-component-props
        React.createElement(TransitionGroup, { component: "ul", className: styles['flash-list'], "aria-label": ariaLabel }, items.map((item, index) => {
            var _a;
            return (React.createElement(Transition, { transitionChangeDelay: { entering: TIMEOUT_FOR_ENTERING_ANIMATION }, key: (_a = item.id) !== null && _a !== void 0 ? _a : index, in: true }, (state, transitionRootElement) => {
                var _a;
                return (React.createElement("li", { className: styles['flash-list-item'] }, renderItem(item, (_a = item.id) !== null && _a !== void 0 ? _a : index, transitionRootElement, state)));
            }));
        })));
    }
    /**
     * If the flashbar is flat and motion is `disabled` then the adding and removing of items
     * from the flashbar will render without visual transitions.
     */
    function renderFlatItemsWithoutTransitions() {
        if (!motionDisabled || !items) {
            return;
        }
        return (React.createElement("ul", { className: styles['flash-list'], "aria-label": ariaLabel }, items.map((item, index) => {
            var _a, _b;
            return (React.createElement("li", { key: (_a = item.id) !== null && _a !== void 0 ? _a : index, className: styles['flash-list-item'] }, renderItem(item, (_b = item.id) !== null && _b !== void 0 ? _b : index)));
        })));
    }
    /**
     * This is a shared render function for a single flashbar item to be used
     * by the stacking, motion, and non-motion item group render functions.
     */
    function renderItem(item, key, transitionRootElement, transitionState) {
        return (React.createElement(Flash
        // eslint-disable-next-line react/forbid-component-props
        , Object.assign({ 
            // eslint-disable-next-line react/forbid-component-props
            className: clsx(animateFlash && styles['flash-with-motion'], isVisualRefresh && styles['flash-refresh']), key: key, ref: transitionRootElement, transitionState: transitionState, i18nStrings: iconAriaLabels }, item)));
    }
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.flashbar, styles[`breakpoint-${breakpoint}`]), ref: mergedRef }),
        renderFlatItemsWithTransitions(),
        renderFlatItemsWithoutTransitions()));
}
//# sourceMappingURL=non-collapsible-flashbar.js.map