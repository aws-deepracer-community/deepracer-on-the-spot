import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { getBaseProps } from '../internal/base-component';
import InternalAlert from '../alert/internal';
import InternalBox from '../box/internal';
import InternalContentLayout from '../content-layout/internal';
import styles from './styles.css.js';
import LiveRegion from '../internal/components/live-region';
import { useInternalI18n } from '../i18n/context';
import { useFunnel } from '../internal/analytics/hooks/use-funnel';
import { FunnelMetrics } from '../internal/analytics';
export default function InternalForm(_a) {
    var { children, header, errorText, errorIconAriaLabel: errorIconAriaLabelOverride, actions, secondaryActions, variant, __internalRootRef } = _a, props = __rest(_a, ["children", "header", "errorText", "errorIconAriaLabel", "actions", "secondaryActions", "variant", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    const i18n = useInternalI18n('form');
    const errorIconAriaLabel = i18n('errorIconAriaLabel', errorIconAriaLabelOverride);
    const { funnelInteractionId, submissionAttempt, errorCount } = useFunnel();
    useEffect(() => {
        if (funnelInteractionId && errorText) {
            errorCount.current++;
            FunnelMetrics.funnelError({ funnelInteractionId });
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                errorCount.current--;
            };
        }
    }, [funnelInteractionId, errorText, submissionAttempt, errorCount]);
    return (React.createElement("div", Object.assign({}, baseProps, { ref: __internalRootRef, className: clsx(styles.root, baseProps.className) }),
        React.createElement(FormLayout, { header: header && React.createElement("div", { className: clsx(styles.header, variant === 'full-page' && styles['full-page']) }, header), variant: variant },
            children && React.createElement("div", { className: styles.content }, children),
            errorText && (React.createElement(InternalBox, { margin: { top: 'l' } },
                React.createElement(InternalAlert, { type: "error", statusIconAriaLabel: errorIconAriaLabel },
                    React.createElement("div", { className: styles.error }, errorText)))),
            (actions || secondaryActions) && (React.createElement("div", { className: styles.footer },
                React.createElement("div", { className: styles['actions-section'] },
                    actions && React.createElement("div", { className: styles.actions }, actions),
                    secondaryActions && React.createElement("div", { className: styles['secondary-actions'] }, secondaryActions)))),
            errorText && (React.createElement(LiveRegion, { assertive: true },
                errorIconAriaLabel,
                ", ",
                errorText)))));
}
function FormLayout({ children, header, variant }) {
    return variant === 'full-page' && header ? (React.createElement(InternalContentLayout, { header: header }, children)) : (React.createElement(React.Fragment, null,
        header,
        children));
}
//# sourceMappingURL=internal.js.map