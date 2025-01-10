/// <reference types="react" />
import { NonCancelableEventHandler } from '../../events';
import { I18nStrings } from './interfaces';
interface TokenLimitToggleProps {
    controlId?: string;
    allHidden: boolean;
    expanded: boolean;
    numberOfHiddenOptions: number;
    onClick?: NonCancelableEventHandler<null>;
    i18nStrings?: I18nStrings;
    limitShowFewerAriaLabel?: string;
    limitShowMoreAriaLabel?: string;
}
export default function TokenLimitToggle({ controlId, allHidden, expanded, numberOfHiddenOptions, onClick, i18nStrings, limitShowFewerAriaLabel, limitShowMoreAriaLabel, }: TokenLimitToggleProps): JSX.Element;
export {};
//# sourceMappingURL=token-limit-toggle.d.ts.map