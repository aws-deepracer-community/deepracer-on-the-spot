import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../../internal/base-component';
import { fireCancelableEvent, isPlainLeftClick } from '../../internal/events';
import VisualContext from '../../internal/components/visual-context';
import Portal from '../../internal/components/portal';
import { useTopNavigation } from './use-top-navigation.js';
import Utility from './parts/utility';
import OverflowMenu from './parts/overflow-menu';
import styles from './styles.css.js';
import { checkSafeUrl } from '../../internal/utils/check-safe-url';
export default function InternalTopNavigation(_a) {
    var { __internalRootRef, identity, i18nStrings, utilities = [], search } = _a, restProps = __rest(_a, ["__internalRootRef", "identity", "i18nStrings", "utilities", "search"]);
    checkSafeUrl('TopNavigation', identity.href);
    const baseProps = getBaseProps(restProps);
    const { ref, virtualRef, breakpoint, responsiveState, isSearchExpanded, onSearchUtilityClick } = useTopNavigation({
        __internalRootRef,
        identity,
        search,
        utilities,
    });
    const isNarrowViewport = breakpoint === 'default';
    const isMediumViewport = breakpoint === 'xxs';
    const onIdentityClick = (event) => {
        if (isPlainLeftClick(event)) {
            fireCancelableEvent(identity.onFollow, {}, event);
        }
    };
    // Render the top nav twice; once as the top nav that users can see, and another
    // "virtual" top nav used just for calculations. The virtual top nav doesn't react to
    // layout changes and renders two sets of utilities: one with labels and one without.
    const content = (isVirtual) => {
        var _a, _b, _c, _d;
        const Wrapper = isVirtual ? 'div' : 'header';
        const showIdentity = isVirtual || !isSearchExpanded;
        const showTitle = isVirtual || !responsiveState.hideTitle;
        const showSearchSlot = search && (isVirtual || !responsiveState.hideSearch || isSearchExpanded);
        const showSearchUtility = isVirtual || (search && responsiveState.hideSearch);
        const showUtilities = isVirtual || !isSearchExpanded;
        const showMenuTrigger = isVirtual || (!isSearchExpanded && responsiveState.hideUtilities);
        return (React.createElement(Wrapper, { ref: isVirtual ? virtualRef : ref, "aria-hidden": isVirtual ? true : undefined, 
            // False positive, "Wrapper" is either a "div" or a "header"
            // eslint-disable-next-line react/forbid-component-props
            className: clsx(styles['top-navigation'], {
                [styles.hidden]: isVirtual,
                [styles.narrow]: isNarrowViewport,
                [styles.medium]: isMediumViewport,
            }) },
            React.createElement("div", { className: styles['padding-box'] },
                showIdentity && (React.createElement("div", { className: clsx(styles.identity, !identity.logo && styles['no-logo']) },
                    React.createElement("a", { className: styles['identity-link'], href: identity.href, onClick: onIdentityClick },
                        identity.logo && (React.createElement("img", { role: "img", src: (_a = identity.logo) === null || _a === void 0 ? void 0 : _a.src, alt: (_b = identity.logo) === null || _b === void 0 ? void 0 : _b.alt, className: clsx(styles.logo, {
                                [styles.narrow]: isNarrowViewport,
                            }) })),
                        showTitle && React.createElement("span", { className: styles.title }, identity.title)))),
                React.createElement("div", { className: styles.inputs }, showSearchSlot && (React.createElement("div", { className: clsx(styles.search, !isVirtual && isSearchExpanded && styles['search-expanded']) }, search))),
                React.createElement("div", { className: styles.utilities },
                    showSearchUtility && (React.createElement("div", { className: clsx(styles['utility-wrapper'], styles['utility-type-button'], styles['utility-type-button-link']), "data-utility-special": "search" },
                        React.createElement(Utility, { hideText: true, isNarrowViewport: isNarrowViewport, definition: {
                                type: 'button',
                                iconName: isSearchExpanded ? 'close' : 'search',
                                ariaLabel: isSearchExpanded
                                    ? i18nStrings.searchDismissIconAriaLabel
                                    : i18nStrings.searchIconAriaLabel,
                                onClick: onSearchUtilityClick,
                            } }))),
                    showUtilities &&
                        utilities
                            .filter((_utility, i) => isVirtual || !responsiveState.hideUtilities || responsiveState.hideUtilities.indexOf(i) === -1)
                            .map((utility, i) => {
                            var _a;
                            const hideText = !!responsiveState.hideUtilityText;
                            const last = (isVirtual || !showMenuTrigger) && i === utilities.length - 1;
                            return (React.createElement("div", { key: i, className: clsx(styles['utility-wrapper'], styles[`utility-type-${utility.type}`], last && styles['utility-wrapper-last'], utility.type === 'button' && styles[`utility-type-button-${(_a = utility.variant) !== null && _a !== void 0 ? _a : 'link'}`]), "data-utility-index": i, "data-utility-hide": `${hideText}` },
                                React.createElement(Utility, { hideText: hideText, definition: utility, last: last, isNarrowViewport: isNarrowViewport })));
                        }),
                    isVirtual &&
                        utilities.map((utility, i) => {
                            var _a;
                            const hideText = !responsiveState.hideUtilityText;
                            const last = !showMenuTrigger && i === utilities.length - 1;
                            return (React.createElement("div", { key: i, className: clsx(styles['utility-wrapper'], styles[`utility-type-${utility.type}`], last && styles['utility-wrapper-last'], utility.type === 'button' && styles[`utility-type-button-${(_a = utility.variant) !== null && _a !== void 0 ? _a : 'link'}`]), "data-utility-index": i, "data-utility-hide": `${hideText}` },
                                React.createElement(Utility, { hideText: hideText, definition: utility, last: last, isNarrowViewport: isNarrowViewport })));
                        }),
                    showMenuTrigger && (React.createElement("div", { className: clsx(styles['utility-wrapper'], styles['utility-type-menu-dropdown'], styles['utility-wrapper-last']), "data-utility-special": "menu-trigger" },
                        React.createElement(OverflowMenu, { utilities: (_d = (_c = responsiveState.hideUtilities) === null || _c === void 0 ? void 0 : _c.map(i => utilities[i])) !== null && _d !== void 0 ? _d : [], isNarrowViewport: isNarrowViewport }, i18nStrings.overflowMenuTriggerText)))))));
    };
    return (React.createElement("div", Object.assign({}, baseProps, { ref: __internalRootRef }),
        React.createElement(VisualContext, { contextName: "top-navigation" },
            content(false),
            React.createElement(Portal, null, content(true)))));
}
//# sourceMappingURL=internal.js.map