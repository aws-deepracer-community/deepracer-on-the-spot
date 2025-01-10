// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
export const useAutosuggestLoadMore = ({ options = [], statusType, onLoadItems, }) => {
    const lastFilteringText = useRef(null);
    const fireLoadMore = ({ firstPage, samePage, filteringText, }) => {
        var _a;
        if (filteringText === undefined || lastFilteringText.current !== filteringText) {
            if (filteringText !== undefined) {
                lastFilteringText.current = filteringText;
            }
            onLoadItems({ filteringText: (_a = lastFilteringText.current) !== null && _a !== void 0 ? _a : '', firstPage, samePage });
        }
    };
    const fireLoadMoreOnScroll = () => {
        options.length > 0 && statusType === 'pending' && fireLoadMore({ firstPage: false, samePage: false });
    };
    const fireLoadMoreOnRecoveryClick = () => fireLoadMore({ firstPage: false, samePage: true });
    const fireLoadMoreOnInputFocus = () => fireLoadMore({ firstPage: true, samePage: false, filteringText: '' });
    const fireLoadMoreOnInputChange = (filteringText) => fireLoadMore({ firstPage: true, samePage: false, filteringText });
    return { fireLoadMoreOnScroll, fireLoadMoreOnRecoveryClick, fireLoadMoreOnInputFocus, fireLoadMoreOnInputChange };
};
//# sourceMappingURL=load-more-controller.js.map