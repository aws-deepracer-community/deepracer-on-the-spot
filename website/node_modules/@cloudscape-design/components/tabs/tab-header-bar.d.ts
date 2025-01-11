/// <reference types="react" />
import { TabsProps } from './interfaces';
export interface TabHeaderBarProps {
    onChange: (changeDetail: TabsProps.ChangeDetail) => void;
    activeTabId: TabsProps['activeTabId'];
    tabs: TabsProps['tabs'];
    variant: TabsProps['variant'];
    idNamespace: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    i18nStrings?: TabsProps.I18nStrings;
}
export declare function TabHeaderBar({ onChange, activeTabId, tabs, variant, idNamespace, ariaLabel, ariaLabelledby, i18nStrings, }: TabHeaderBarProps): JSX.Element;
export declare function getTabElementId({ namespace, tabId }: {
    namespace: string;
    tabId: string;
}): string;
//# sourceMappingURL=tab-header-bar.d.ts.map