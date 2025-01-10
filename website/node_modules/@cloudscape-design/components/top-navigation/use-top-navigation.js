// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import styles from './styles.css.js';
import { useContainerQuery } from '@cloudscape-design/component-toolkit';
// A small buffer to make calculations more lenient against browser lag or padding adjustments.
const RESPONSIVENESS_BUFFER = 20;
export function useTopNavigation({ identity, search, utilities }) {
    // Refs and breakpoints
    const mainRef = useRef(null);
    const virtualRef = useRef(null);
    const [breakpoint, breakpointRef] = useContainerBreakpoints(['xxs', 's']);
    // Responsiveness state
    // The component works by calculating the possible resize states that it can
    // be in, and having a state variable to track which state we're currently in.
    const hasSearch = !!search;
    const hasTitleWithLogo = identity && !!identity.logo && !!identity.title;
    const responsiveStates = useMemo(() => {
        return generateResponsiveStateKeys(utilities, hasSearch, hasTitleWithLogo);
    }, [utilities, hasSearch, hasTitleWithLogo]);
    // To hide/show elements dynamically, we need to know how much space they take up,
    // even if they're not being rendered. The top navigation elements are hidden/resized
    // based on the available size or if a search bar is open, and they need to be available
    // for calculations so we know where to toggle them. So we render a second, more stable
    // top-nav off screen to do these calculations against.
    //
    // We can't "affix" these values to pixels because they can depend on spacing tokens.
    // It's easier to render all of these utilities separately rather than figuring out
    // spacing token values, icon sizes, text widths, etc.
    const [responsiveState, setResponsiveState] = useState();
    const recalculateFit = useCallback(() => {
        var _a, _b, _c, _d;
        if (!(mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) || !virtualRef.current) {
            setResponsiveState(responsiveStates[0]);
            return;
        }
        // Get available width from the visible top navigation.
        const availableWidth = getContentBoxWidth(mainRef.current.querySelector(`.${styles['padding-box']}`));
        if (availableWidth === 0) {
            // Likely in an SSR or Jest situation.
            setResponsiveState(responsiveStates[0]);
            return;
        }
        const sizeConfiguration = {
            hasSearch,
            availableWidth,
            // Get widths from the hidden top navigation
            fullIdentityWidth: virtualRef.current.querySelector(`.${styles.identity}`).getBoundingClientRect().width,
            titleWidth: (_b = (_a = virtualRef.current.querySelector(`.${styles.title}`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width) !== null && _b !== void 0 ? _b : 0,
            searchSlotWidth: (_d = (_c = virtualRef.current.querySelector(`.${styles.search}`)) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect().width) !== null && _d !== void 0 ? _d : 0,
            searchUtilityWidth: virtualRef.current.querySelector('[data-utility-special="search"]').getBoundingClientRect()
                .width,
            utilitiesLeftPadding: parseFloat(getComputedStyle(virtualRef.current.querySelector(`.${styles.utilities}`)).paddingLeft || '0px'),
            utilityWithLabelWidths: Array.prototype.slice
                .call(virtualRef.current.querySelectorAll(`[data-utility-hide="false"]`))
                .map((element) => element.getBoundingClientRect().width),
            utilityWithoutLabelWidths: Array.prototype.slice
                .call(virtualRef.current.querySelectorAll(`[data-utility-hide="true"]`))
                .map((element) => element.getBoundingClientRect().width),
            menuTriggerUtilityWidth: virtualRef.current
                .querySelector('[data-utility-special="menu-trigger"]')
                .getBoundingClientRect().width,
        };
        setResponsiveState(determineBestResponsiveState(responsiveStates, sizeConfiguration));
    }, [responsiveStates, hasSearch]);
    const [, containerQueryRef] = useContainerQuery(() => {
        recalculateFit();
    }, [recalculateFit]);
    // Due to being rendered in a portal, the virtual navigation isn't rendered
    // at the same time as the main one.
    const onVirtualMount = useCallback((element) => {
        virtualRef.current = element;
        recalculateFit();
    }, [recalculateFit]);
    // Search slot expansion on small screens
    const [isSearchMinimized, setSearchMinimized] = useState(true);
    const isSearchExpanded = !isSearchMinimized && hasSearch && (responsiveState === null || responsiveState === void 0 ? void 0 : responsiveState.hideSearch);
    // If the search was expanded, and then the screen resized so that the
    // expansion is no longer necessary. So we implicitly minimize it.
    useEffect(() => {
        if (!(responsiveState === null || responsiveState === void 0 ? void 0 : responsiveState.hideSearch)) {
            setSearchMinimized(true);
        }
    }, [responsiveState]);
    // If the search is expanded after clicking on the search utility, move
    // the focus to the input. Since this is a user-controlled slot, we're just
    // assuming that it contains an input, though it's a pretty safe guess.
    useEffect(() => {
        var _a, _b;
        if (isSearchExpanded) {
            (_b = (_a = mainRef === null || mainRef === void 0 ? void 0 : mainRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`.${styles.search} input`)) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }, [isSearchExpanded, mainRef]);
    const mergedMainRef = useMergeRefs(mainRef, containerQueryRef, breakpointRef);
    return {
        mainRef: mergedMainRef,
        virtualRef: onVirtualMount,
        responsiveState: responsiveState !== null && responsiveState !== void 0 ? responsiveState : responsiveStates[0],
        breakpoint: breakpoint !== null && breakpoint !== void 0 ? breakpoint : 'default',
        isSearchExpanded: !!isSearchExpanded,
        onSearchUtilityClick: () => setSearchMinimized(isSearchMinimized => !isSearchMinimized),
    };
}
/**
 * Get the width of the content box (assuming the element's box-sizing is border-box).
 */
function getContentBoxWidth(element) {
    const style = getComputedStyle(element);
    return (parseFloat(style.width || '0px') - parseFloat(style.paddingLeft || '0px') - parseFloat(style.paddingRight || '0px'));
}
/**
 * Generates the series of responsive steps that can be performed on the header in order.
 */
export function generateResponsiveStateKeys(utilities, canHideSearch, canHideTitle) {
    const states = [{}];
    if (utilities.some(utility => utility.text)) {
        states.push({ hideUtilityText: true });
    }
    if (canHideSearch) {
        states.push({
            hideUtilityText: true,
            hideSearch: true,
        });
    }
    const hiddenUtilties = [];
    for (let i = 0; i < utilities.length; i++) {
        if (!utilities[i].disableUtilityCollapse) {
            hiddenUtilties.push(i);
            states.push({
                hideUtilityText: true,
                hideSearch: canHideSearch || undefined,
                hideUtilities: hiddenUtilties.length > 0 ? hiddenUtilties.slice() : undefined,
            });
        }
    }
    if (canHideTitle) {
        states.push({
            hideUtilityText: true,
            hideSearch: canHideSearch || undefined,
            hideUtilities: hiddenUtilties.length > 0 ? hiddenUtilties.slice() : undefined,
            hideTitle: true,
        });
    }
    return states;
}
/**
 * Determines the best responsive state configuration of the top navigation, based on the given list of possible responsive states
 * and the current sizes of all elements inside the navigation bar.
 */
export function determineBestResponsiveState(possibleStates, sizes) {
    const { hasSearch, availableWidth, utilitiesLeftPadding, fullIdentityWidth, titleWidth, searchSlotWidth, searchUtilityWidth, utilityWithLabelWidths, utilityWithoutLabelWidths, menuTriggerUtilityWidth, } = sizes;
    // Iterate through each state and calculate its expected required width.
    for (const state of possibleStates) {
        const searchWidth = hasSearch ? (state.hideSearch ? searchUtilityWidth : searchSlotWidth) : 0;
        const utilitiesWidth = (state.hideUtilityText ? utilityWithoutLabelWidths : utilityWithLabelWidths)
            .filter((_width, i) => !state.hideUtilities || state.hideUtilities.indexOf(i) === -1)
            .reduce((sum, width) => sum + width, 0);
        const menuTriggerWidth = state.hideUtilities ? menuTriggerUtilityWidth : 0;
        const identityWidth = state.hideTitle ? fullIdentityWidth - titleWidth : fullIdentityWidth;
        const expectedInnerWidth = identityWidth + searchWidth + utilitiesLeftPadding + utilitiesWidth + menuTriggerWidth;
        if (expectedInnerWidth <= availableWidth - RESPONSIVENESS_BUFFER) {
            return state;
        }
    }
    // If nothing matches, pick the smallest possible state.
    return possibleStates[possibleStates.length - 1];
}
//# sourceMappingURL=use-top-navigation.js.map