// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalLink from '../../../link/internal';
import InternalStatusIndicator from '../../../status-indicator/internal';
import { fireNonCancelableEvent } from '../../events';
import { usePrevious } from '../../hooks/use-previous';
import styles from './styles.css.js';
function DropdownStatus({ children }) {
    return React.createElement("div", { className: styles.root }, children);
}
export const useDropdownStatus = ({ statusType, empty, loadingText, finishedText, filteringResultsText, errorText, recoveryText, isEmpty, isNoMatch, isFiltered, noMatch, onRecoveryClick, hasRecoveryCallback = false, errorIconAriaLabel, }) => {
    const previousStatusType = usePrevious(statusType);
    const statusResult = { isSticky: true, content: null };
    if (statusType === 'loading') {
        statusResult.content = React.createElement(InternalStatusIndicator, { type: 'loading' }, loadingText);
    }
    else if (statusType === 'error') {
        statusResult.content = (React.createElement("span", null,
            React.createElement(InternalStatusIndicator, { type: "error", __display: "inline", __animate: previousStatusType !== 'error', iconAriaLabel: errorIconAriaLabel }, errorText),
            ' ',
            !!recoveryText && hasRecoveryCallback && (React.createElement(InternalLink, { onFollow: () => fireNonCancelableEvent(onRecoveryClick), variant: "recovery", className: styles.recovery }, recoveryText))));
    }
    else if (isEmpty && empty) {
        statusResult.content = empty;
    }
    else if (isNoMatch && noMatch) {
        statusResult.content = noMatch;
    }
    else if (isFiltered && filteringResultsText) {
        statusResult.content = filteringResultsText;
    }
    else if (statusType === 'finished' && finishedText) {
        statusResult.content = finishedText;
        statusResult.isSticky = false;
    }
    return statusResult;
};
export default DropdownStatus;
//# sourceMappingURL=index.js.map