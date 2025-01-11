import React from 'react';
import { NonCancelableEventHandler } from '../../events';
import { DropdownStatusProps } from './interfaces';
export { DropdownStatusProps };
export interface DropdownStatusPropsExtended extends DropdownStatusProps {
    isEmpty?: boolean;
    isNoMatch?: boolean;
    isFiltered?: boolean;
    noMatch?: React.ReactNode;
    filteringResultsText?: string;
    /**
     * Called when the user clicks the recovery button placed at the
     * bottom of the dropdown list in the error state. Use this to
     * retry a failed request or provide another option for the user
     * to recover from the error.
     */
    onRecoveryClick?: NonCancelableEventHandler;
    /**
     * Determines if retry button should be rendered
     * in case recoveryText was automatically provided by i18n.
     */
    hasRecoveryCallback?: boolean;
}
declare function DropdownStatus({ children }: {
    children: React.ReactNode;
}): JSX.Element;
type UseDropdownStatus = ({ statusType, empty, loadingText, finishedText, filteringResultsText, errorText, recoveryText, isEmpty, isNoMatch, isFiltered, noMatch, hasRecoveryCallback, onRecoveryClick, }: DropdownStatusPropsExtended) => DropdownStatusResult;
interface DropdownStatusResult {
    isSticky: boolean;
    content: React.ReactNode | null;
}
export declare const useDropdownStatus: UseDropdownStatus;
export default DropdownStatus;
//# sourceMappingURL=index.d.ts.map