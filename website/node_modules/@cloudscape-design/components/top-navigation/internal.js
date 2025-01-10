import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import { fireCancelableEvent, isPlainLeftClick } from '../internal/events';
import VisualContext from '../internal/components/visual-context';
import Portal from '../internal/components/portal';
import { useEffectOnUpdate } from '../internal/hooks/use-effect-on-update';
import { useTopNavigation } from './use-top-navigation.js';
import Utility from './parts/utility';
import OverflowMenu from './parts/overflow-menu';
import { ButtonTrigger } from '../internal/components/menu-dropdown';
import styles from './styles.css.js';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import { useInternalI18n } from '../i18n/context';
export default function InternalTopNavigation(_a) {
    var { __internalRootRef, identity, i18nStrings, utilities, search } = _a, restProps = __rest(_a, ["__internalRootRef", "identity", "i18nStrings", "utilities", "search"]);
    checkSafeUrl('TopNavigation', identity.href);
    const baseProps = getBaseProps(restProps);
    const { mainRef, virtualRef, breakpoint, responsiveState, isSearchExpanded, onSearchUtilityClick } = useTopNavigation({ identity, search, utilities });
    const [overflowMenuOpen, setOverflowMenuOpen] = useState(false);
    const overflowMenuTriggerRef = useRef(null);
    const isNarrowViewport = breakpoint === 'default';
    const isMediumViewport = breakpoint === 'xxs';
    const isLargeViewport = breakpoint === 's';
    const i18n = useInternalI18n('top-navigation');
    const onIdentityClick = (event) => {
        if (isPlainLeftClick(event)) {
            fireCancelableEvent(identity.onFollow, {}, event);
        }
    };
    const toggleOverflowMenu = () => {
        setOverflowMenuOpen(overflowMenuOpen => !overflowMenuOpen);
    };
    const menuTriggerVisible = !isSearchExpanded && responsiveState.hideUtilities;
    useEffect(() => {
        setOverflowMenuOpen(false);
    }, [menuTriggerVisible]);
    useEffectOnUpdate(() => {
        var _a;
        if (!overflowMenuOpen) {
            (_a = overflowMenuTriggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [overflowMenuOpen]);
    // Render the top nav twice; once as the top nav that users can see, and another
    // "virtual" top nav used just for calculations. The virtual top nav doesn't react to
    // layout changes and renders two sets of utilities: one with labels and one without.
    const content = (isVirtual) => {
        var _a, _b;
        const Wrapper = isVirtual ? 'div' : 'header';
        const showIdentity = isVirtual || !isSearchExpanded;
        const showTitle = isVirtual || !responsiveState.hideTitle;
        const showSearchSlot = search && (isVirtual || !responsiveState.hideSearch || isSearchExpanded);
        const showSearchUtility = isVirtual || (search && responsiveState.hideSearch);
        const showUtilities = isVirtual || !isSearchExpanded;
        const showMenuTrigger = isVirtual || menuTriggerVisible;
        return (React.createElement(Wrapper, { ref: isVirtual ? virtualRef : mainRef, "aria-hidden": isVirtual ? true : undefined, 
            // Wrapper is an alias for "div" or "header".
            // eslint-disable-next-line react/forbid-component-props
            className: clsx(styles['top-navigation'], {
                [styles.virtual]: isVirtual,
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
                showSearchSlot && (React.createElement("div", { className: styles.inputs },
                    React.createElement("div", { className: clsx(styles.search, !isVirtual && isSearchExpanded && styles['search-expanded']) }, search))),
                React.createElement("div", { className: styles.utilities },
                    showSearchUtility && (React.createElement("div", { className: clsx(styles['utility-wrapper'], styles['utility-type-button'], styles['utility-type-button-link'], {
                            [styles.narrow]: isNarrowViewport,
                            [styles.medium]: isMediumViewport,
                        }), "data-utility-special": "search" },
                        React.createElement(Utility, { hideText: true, definition: {
                                type: 'button',
                                iconName: isSearchExpanded ? 'close' : 'search',
                                ariaLabel: isSearchExpanded
                                    ? i18n('i18nStrings.searchDismissIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.searchDismissIconAriaLabel)
                                    : i18n('i18nStrings.searchIconAriaLabel', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.searchIconAriaLabel),
                                onClick: onSearchUtilityClick,
                            } }))),
                    showUtilities &&
                        utilities
                            .filter((_utility, i) => isVirtual || !responsiveState.hideUtilities || responsiveState.hideUtilities.indexOf(i) === -1)
                            .map((utility, i) => {
                            var _a;
                            const hideText = !!responsiveState.hideUtilityText;
                            const isLast = (isVirtual || !showMenuTrigger) && i === utilities.length - 1;
                            const offsetRight = isLast && isLargeViewport ? 'xxl' : isLast ? 'l' : undefined;
                            return (React.createElement("div", { key: i, className: clsx(styles['utility-wrapper'], styles[`utility-type-${utility.type}`], utility.type === 'button' && styles[`utility-type-button-${(_a = utility.variant) !== null && _a !== void 0 ? _a : 'link'}`], {
                                    [styles.narrow]: isNarrowViewport,
                                    [styles.medium]: isMediumViewport,
                                }), "data-utility-index": i, "data-utility-hide": `${hideText}` },
                                React.createElement(Utility, { hideText: hideText, definition: utility, offsetRight: offsetRight })));
                        }),
                    isVirtual &&
                        utilities.map((utility, i) => {
                            var _a;
                            const hideText = !responsiveState.hideUtilityText;
                            const isLast = !showMenuTrigger && i === utilities.length - 1;
                            const offsetRight = isLast && isLargeViewport ? 'xxl' : isLast ? 'l' : undefined;
                            return (React.createElement("div", { key: i, className: clsx(styles['utility-wrapper'], styles[`utility-type-${utility.type}`], utility.type === 'button' && styles[`utility-type-button-${(_a = utility.variant) !== null && _a !== void 0 ? _a : 'link'}`], {
                                    [styles.narrow]: isNarrowViewport,
                                    [styles.medium]: isMediumViewport,
                                }), "data-utility-index": i, "data-utility-hide": `${hideText}` },
                                React.createElement(Utility, { hideText: hideText, definition: utility, offsetRight: offsetRight })));
                        }),
                    showMenuTrigger && (React.createElement("div", { className: clsx(styles['utility-wrapper'], styles['utility-type-menu-dropdown'], {
                            [styles.narrow]: isNarrowViewport,
                            [styles.medium]: isMediumViewport,
                        }), "data-utility-special": "menu-trigger" },
                        React.createElement(ButtonTrigger, { expanded: overflowMenuOpen, onClick: toggleOverflowMenu, offsetRight: "l", ref: !isVirtual ? overflowMenuTriggerRef : undefined }, i18n('i18nStrings.overflowMenuTriggerText', i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.overflowMenuTriggerText))))))));
    };
    return (React.createElement("div", Object.assign({}, baseProps, { ref: __internalRootRef }),
        React.createElement(VisualContext, { contextName: "top-navigation" },
            content(false),
            React.createElement(Portal, null, content(true)),
            menuTriggerVisible && overflowMenuOpen && (React.createElement("div", { className: styles['overflow-menu-drawer'] },
                React.createElement(OverflowMenu, { headerText: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.overflowMenuTitleText, dismissIconAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.overflowMenuDismissIconAriaLabel, backIconAriaLabel: i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.overflowMenuBackIconAriaLabel, items: utilities.filter((utility, i) => (!responsiveState.hideUtilities || responsiveState.hideUtilities.indexOf(i) !== -1) &&
                        !utility.disableUtilityCollapse), onClose: toggleOverflowMenu }))))));
}
//# sourceMappingURL=internal.js.map