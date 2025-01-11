// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import InternalExpandableSection from '../expandable-section/internal';
import InternalIcon from '../icon/internal';
import InternalBox from '../box/internal';
import styles from './styles.css.js';
import { isPlainLeftClick } from '../internal/events';
import { hasActiveLink } from './util';
import { checkSafeUrl } from '../internal/utils/check-safe-url';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
export function Header({ definition, activeHref, fireFollow }) {
    checkSafeUrl('SideNavigation', definition.href);
    const onClick = useCallback((event) => {
        if (isPlainLeftClick(event)) {
            fireFollow(definition, event);
        }
    }, [fireFollow, definition]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", { className: styles.header },
            React.createElement("a", { href: definition.href, className: clsx(styles['header-link'], { [styles['header-link--has-logo']]: !!definition.logo }), "aria-current": definition.href === activeHref ? 'page' : undefined, onClick: onClick },
                definition.logo && (React.createElement("img", Object.assign({ className: clsx(styles['header-logo'], {
                        [styles['header-logo--stretched']]: !definition.text,
                    }) }, definition.logo))),
                React.createElement("span", { className: styles['header-link-text'] }, definition.text))),
        React.createElement(Divider, { isPresentational: true, variant: "header" })));
}
export function NavigationItemsList({ items, variant, activeHref, fireChange, fireFollow }) {
    const lists = [];
    let currentListIndex = 0;
    lists[currentListIndex] = {
        listVariant: variant,
        items: [],
    };
    items.forEach((item, index) => {
        var _a, _b, _c, _d, _e;
        const itemid = index + 1;
        switch (item.type) {
            case 'divider': {
                const dividerIndex = lists.length;
                lists[dividerIndex] = {
                    element: (React.createElement("div", { "data-itemid": `item-${itemid}` },
                        React.createElement(Divider, { variant: "default" }))),
                };
                currentListIndex = lists.length;
                lists[currentListIndex] = {
                    listVariant: variant,
                    items: [],
                };
                return;
            }
            case 'link': {
                (_a = lists[currentListIndex].items) === null || _a === void 0 ? void 0 : _a.push({
                    element: (React.createElement("li", { key: index, "data-itemid": `item-${itemid}`, className: styles['list-item'] },
                        React.createElement(Link, { definition: item, activeHref: activeHref, fireChange: fireChange, fireFollow: fireFollow }))),
                });
                return;
            }
            case 'section': {
                (_b = lists[currentListIndex].items) === null || _b === void 0 ? void 0 : _b.push({
                    element: (React.createElement("li", { key: index, "data-itemid": `item-${itemid}`, className: styles['list-item'] },
                        React.createElement(Section, { definition: item, activeHref: activeHref, variant: variant, fireChange: fireChange, fireFollow: fireFollow }))),
                });
                return;
            }
            case 'section-group': {
                (_c = lists[currentListIndex].items) === null || _c === void 0 ? void 0 : _c.push({
                    element: (React.createElement("li", { key: index, "data-itemid": `item-${itemid}`, className: styles['list-item'] },
                        React.createElement(SectionGroup, { definition: item, activeHref: activeHref, fireChange: fireChange, fireFollow: fireFollow }))),
                });
                return;
            }
            case 'link-group': {
                (_d = lists[currentListIndex].items) === null || _d === void 0 ? void 0 : _d.push({
                    element: (React.createElement("li", { key: index, "data-itemid": `item-${itemid}`, className: styles['list-item'] },
                        React.createElement(LinkGroup, { definition: item, activeHref: activeHref, fireChange: fireChange, fireFollow: fireFollow }))),
                });
                return;
            }
            case 'expandable-link-group': {
                (_e = lists[currentListIndex].items) === null || _e === void 0 ? void 0 : _e.push({
                    element: (React.createElement("li", { key: index, "data-itemid": `item-${itemid}`, className: styles['list-item'] },
                        React.createElement(ExpandableLinkGroup, { definition: item, activeHref: activeHref, fireChange: fireChange, fireFollow: fireFollow, variant: variant }))),
                });
                return;
            }
        }
    });
    const lastListIndex = lists.length - 1;
    return (React.createElement(React.Fragment, null, lists.map((list, index) => {
        if (!list.items || list.items.length === 0) {
            return (React.createElement("div", { key: `hr-${index}`, className: clsx(styles.list, styles[`list-variant-${variant}`], {
                    [styles['list-variant-root--last']]: list.listVariant === 'root' && index === lastListIndex,
                }) }, list.element));
        }
        else {
            return (React.createElement("ul", { key: `list-${index}`, className: clsx(styles.list, styles[`list-variant-${list.listVariant}`], {
                    [styles['list-variant-root--last']]: list.listVariant === 'root' && index === lastListIndex,
                }) }, list.items.map(item => item.element)));
        }
    })));
}
function Divider({ variant = 'default', isPresentational = false }) {
    return (React.createElement("hr", { className: clsx(styles.divider, styles[`divider-${variant}`]), role: isPresentational ? 'presentation' : undefined }));
}
function Link({ definition, expanded, activeHref, fireFollow }) {
    checkSafeUrl('SideNavigation', definition.href);
    const isActive = definition.href === activeHref;
    const onClick = useCallback((event) => {
        if (isPlainLeftClick(event)) {
            fireFollow(definition, event);
        }
    }, [fireFollow, definition]);
    return (React.createElement(React.Fragment, null,
        React.createElement("a", { href: definition.href, className: clsx(styles.link, { [styles['link-active']]: isActive }), target: definition.external ? '_blank' : undefined, rel: definition.external ? 'noopener noreferrer' : undefined, "aria-expanded": expanded, "aria-current": definition.href === activeHref ? 'page' : undefined, onClick: onClick },
            definition.text,
            definition.external && (React.createElement("span", { "aria-label": definition.externalIconAriaLabel, role: definition.externalIconAriaLabel ? 'img' : undefined },
                React.createElement(InternalIcon, { name: "external", className: styles['external-icon'] })))),
        definition.info && React.createElement("span", { className: styles.info }, definition.info)));
}
function Section({ definition, activeHref, fireFollow, fireChange, variant }) {
    var _a;
    const [expanded, setExpanded] = useState((_a = definition.defaultExpanded) !== null && _a !== void 0 ? _a : true);
    const isVisualRefresh = useVisualRefresh();
    const onExpandedChange = useCallback((e) => {
        fireChange(definition, e.detail.expanded);
        setExpanded(e.detail.expanded);
    }, [definition, fireChange]);
    useEffect(() => {
        var _a;
        setExpanded((_a = definition.defaultExpanded) !== null && _a !== void 0 ? _a : true);
    }, [definition]);
    return (React.createElement(InternalExpandableSection, { variant: "footer", expanded: expanded, onChange: onExpandedChange, className: clsx(styles.section, variant === 'section-group' && styles['section--no-ident'], isVisualRefresh && styles.refresh), headerText: definition.text },
        React.createElement(NavigationItemsList, { variant: "section", items: definition.items, fireFollow: fireFollow, fireChange: fireChange, activeHref: activeHref })));
}
function SectionGroup({ definition, activeHref, fireFollow, fireChange }) {
    return (React.createElement("div", { className: styles['section-group'] },
        React.createElement(InternalBox, { className: styles['section-group-title'], variant: "h3" }, definition.title),
        React.createElement(NavigationItemsList, { variant: "section-group", items: definition.items, fireFollow: fireFollow, fireChange: fireChange, activeHref: activeHref })));
}
function LinkGroup({ definition, activeHref, fireFollow, fireChange }) {
    checkSafeUrl('SideNavigation', definition.href);
    return (React.createElement(React.Fragment, null,
        React.createElement(Link, { definition: { type: 'link', href: definition.href, text: definition.text, info: definition.info }, fireFollow: (_, event) => fireFollow(definition, event), fireChange: fireChange, activeHref: activeHref }),
        React.createElement(NavigationItemsList, { variant: "link-group", items: definition.items, fireFollow: fireFollow, fireChange: fireChange, activeHref: activeHref })));
}
function ExpandableLinkGroup({ definition, fireFollow, fireChange, activeHref, variant }) {
    // Check whether the definition contains an active link and memoize it to avoid
    // rechecking every time.
    const containsActiveLink = useMemo(() => {
        return activeHref ? hasActiveLink(definition.items, activeHref) : false;
    }, [activeHref, definition.items]);
    const [expanded, setExpanded] = useState(() => {
        var _a;
        return (_a = definition.defaultExpanded) !== null && _a !== void 0 ? _a : (definition.href === activeHref || containsActiveLink);
    });
    const [userExpanded, setUserExpanded] = useState();
    // Reset user expansion status when the items property is updated.
    useEffect(() => setUserExpanded(undefined), [definition]);
    // By default, the expandable section is open when there's an active link inside.
    useEffect(() => {
        setExpanded(definition.href === activeHref || containsActiveLink);
    }, [definition.href, containsActiveLink, activeHref]);
    // If the definition object itself is updated, reset the expansion state to default.
    useEffect(() => {
        if (definition.defaultExpanded !== undefined) {
            setExpanded(definition.defaultExpanded);
        }
    }, [definition]);
    const onExpandedChange = useCallback((e) => {
        fireChange(definition, e.detail.expanded);
        setUserExpanded(e.detail.expanded);
    }, [definition, fireChange]);
    const onHeaderFollow = (_, event) => {
        fireFollow(definition, event);
        setUserExpanded(true);
        if (!expanded) {
            fireChange(definition, true);
        }
    };
    return (React.createElement(InternalExpandableSection, { className: clsx(styles['expandable-link-group'], variant === 'section-group' && styles['expandable-link-group--no-ident']), variant: "navigation", expanded: userExpanded !== null && userExpanded !== void 0 ? userExpanded : expanded, onChange: onExpandedChange, headerText: React.createElement(Link, { definition: { type: 'link', href: definition.href, text: definition.text }, expanded: userExpanded !== null && userExpanded !== void 0 ? userExpanded : expanded, fireFollow: onHeaderFollow, fireChange: fireChange, activeHref: activeHref }) },
        React.createElement(NavigationItemsList, { variant: "expandable-link-group", items: definition.items, fireFollow: fireFollow, fireChange: fireChange, activeHref: activeHref })));
}
//# sourceMappingURL=internal.js.map