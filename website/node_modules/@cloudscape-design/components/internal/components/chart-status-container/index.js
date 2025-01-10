// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import { fireNonCancelableEvent } from '../../events';
import InternalStatusIndicator from '../../../status-indicator/internal';
import InternalLink from '../../../link/internal';
import styles from './styles.css.js';
import { useInternalI18n } from '../../../i18n/context';
export function getChartStatus({ externalData, visibleData, statusType, }) {
    const isEmpty = !visibleData || visibleData.length === 0;
    const isNoMatch = isEmpty && visibleData.length !== externalData.length;
    const showChart = statusType === 'finished' && !isEmpty;
    return { isEmpty, isNoMatch, showChart };
}
export default function ChartStatusContainer({ statusType, errorText, loadingText, recoveryText, noMatch, empty, onRecoveryClick, isNoMatch, isEmpty, showChart, }) {
    const i18n = useInternalI18n('[charts]');
    const statusContainer = useMemo(() => {
        const handleRecoveryClick = (event) => {
            event.preventDefault();
            fireNonCancelableEvent(onRecoveryClick);
        };
        if (statusType === 'error') {
            const renderedRecoveryText = i18n('recoveryText', recoveryText);
            return (React.createElement("span", null,
                React.createElement(InternalStatusIndicator, { type: "error" }, i18n('errorText', errorText)),
                ' ',
                !!renderedRecoveryText && !!onRecoveryClick && (React.createElement(InternalLink, { onFollow: handleRecoveryClick, variant: "recovery" }, renderedRecoveryText))));
        }
        if (statusType === 'loading') {
            return React.createElement(InternalStatusIndicator, { type: "loading" }, i18n('loadingText', loadingText));
        }
        if (isNoMatch) {
            return React.createElement("div", { className: styles.empty }, noMatch);
        }
        if (isEmpty) {
            return React.createElement("div", { className: styles.empty }, empty);
        }
    }, [i18n, statusType, onRecoveryClick, isEmpty, isNoMatch, recoveryText, loadingText, errorText, empty, noMatch]);
    return (React.createElement("div", { className: styles.root, "aria-live": "polite", "aria-atomic": "true" }, !showChart && statusContainer));
}
//# sourceMappingURL=index.js.map