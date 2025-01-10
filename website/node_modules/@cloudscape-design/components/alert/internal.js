import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useRef } from 'react';
import clsx from 'clsx';
import { InternalButton } from '../button/internal';
import InternalIcon from '../icon/internal';
import { getBaseProps } from '../internal/base-component';
import VisualContext from '../internal/components/visual-context';
import styles from './styles.css.js';
import { fireNonCancelableEvent } from '../internal/events';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
import { useVisualRefresh } from '../internal/hooks/use-visual-mode';
import useForwardFocus from '../internal/hooks/forward-focus';
import { useMergeRefs } from '../internal/hooks/use-merge-refs';
import { useInternalI18n } from '../i18n/context';
import { DATA_ATTR_ANALYTICS_ALERT } from '../internal/analytics/selectors';
import { LinkDefaultVariantContext } from '../internal/context/link-default-variant-context';
import { createUseDiscoveredAction } from '../internal/plugins/helpers';
import { awsuiPluginsInternal } from '../internal/plugins/api';
import { ActionsWrapper } from './actions-wrapper';
const typeToIcon = {
    error: 'status-negative',
    warning: 'status-warning',
    success: 'status-positive',
    info: 'status-info',
};
const useDiscoveredAction = createUseDiscoveredAction(awsuiPluginsInternal.alert.onActionRegistered);
const InternalAlert = React.forwardRef((_a, ref) => {
    var { type, statusIconAriaLabel, visible = true, dismissible, dismissAriaLabel, children, header, buttonText, action, onDismiss, onButtonClick, __internalRootRef = null } = _a, rest = __rest(_a, ["type", "statusIconAriaLabel", "visible", "dismissible", "dismissAriaLabel", "children", "header", "buttonText", "action", "onDismiss", "onButtonClick", "__internalRootRef"]);
    const baseProps = getBaseProps(rest);
    const i18n = useInternalI18n('alert');
    const focusRef = useRef(null);
    useForwardFocus(ref, focusRef);
    const [breakpoint, breakpointRef] = useContainerBreakpoints(['xs']);
    const mergedRef = useMergeRefs(breakpointRef, __internalRootRef);
    const isRefresh = useVisualRefresh();
    const size = isRefresh ? 'normal' : header && children ? 'big' : 'normal';
    const { discoveredActions, headerRef, contentRef } = useDiscoveredAction(type);
    const hasAction = Boolean(action || buttonText || discoveredActions.length);
    const analyticsAttributes = {
        [DATA_ATTR_ANALYTICS_ALERT]: type,
    };
    return (React.createElement("div", Object.assign({}, baseProps, analyticsAttributes, { "aria-hidden": !visible, className: clsx(styles.root, { [styles.hidden]: !visible }, baseProps.className), ref: mergedRef }),
        React.createElement(LinkDefaultVariantContext.Provider, { value: { defaultVariant: 'primary' } },
            React.createElement(VisualContext, { contextName: "alert" },
                React.createElement("div", { className: clsx(styles.alert, styles[`type-${type}`], styles[`icon-size-${size}`], hasAction && styles['with-action'], dismissible && styles['with-dismiss'], styles[`breakpoint-${breakpoint}`]) },
                    React.createElement("div", { className: styles['alert-focus-wrapper'], tabIndex: -1, ref: focusRef },
                        React.createElement("div", { className: clsx(styles.icon, styles.text), role: "img", "aria-label": statusIconAriaLabel },
                            React.createElement(InternalIcon, { name: typeToIcon[type], size: size })),
                        React.createElement("div", { className: clsx(styles.message, styles.text) },
                            header && (React.createElement("div", { className: styles.header, ref: headerRef }, header)),
                            React.createElement("div", { className: styles.content, ref: contentRef }, children))),
                    React.createElement(ActionsWrapper, { className: styles.action, testUtilClasses: {
                            actionSlot: styles['action-slot'],
                            actionButton: styles['action-button'],
                        }, action: action, discoveredActions: discoveredActions, buttonText: buttonText, onButtonClick: () => fireNonCancelableEvent(onButtonClick) }),
                    dismissible && (React.createElement("div", { className: styles.dismiss },
                        React.createElement(InternalButton, { className: styles['dismiss-button'], variant: "icon", iconName: "close", formAction: "none", ariaLabel: i18n('dismissAriaLabel', dismissAriaLabel), onClick: () => fireNonCancelableEvent(onDismiss) }))))))));
});
export default InternalAlert;
//# sourceMappingURL=internal.js.map