// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useRef } from 'react';
import { fireNonCancelableEvent } from '../../internal/events';
export const useLoadItems = ({ onLoadItems, options, statusType }) => {
    const prevFilteringText = useRef(undefined);
    const fireLoadItems = (filteringText) => {
        if (prevFilteringText.current === filteringText) {
            return;
        }
        prevFilteringText.current = filteringText;
        fireNonCancelableEvent(onLoadItems, { filteringText, firstPage: true, samePage: false });
    };
    const handleLoadMore = () => {
        const firstPage = options.length === 0;
        statusType === 'pending' &&
            fireNonCancelableEvent(onLoadItems, {
                firstPage,
                samePage: false,
                filteringText: prevFilteringText.current || '',
            });
    };
    const handleRecoveryClick = () => fireNonCancelableEvent(onLoadItems, {
        firstPage: false,
        samePage: true,
        filteringText: prevFilteringText.current || '',
    });
    return {
        fireLoadItems,
        handleLoadMore,
        handleRecoveryClick,
    };
};
//# sourceMappingURL=use-load-items.js.map