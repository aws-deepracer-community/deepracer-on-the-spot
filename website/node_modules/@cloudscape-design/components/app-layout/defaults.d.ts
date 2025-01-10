import { AppLayoutProps } from './interfaces';
export interface AppLayoutState {
    navigationOpen?: boolean;
    minContentWidth: number;
    maxContentWidth?: number | undefined;
}
export declare function applyDefaults(contentType: AppLayoutProps.ContentType, stateFromProps: Pick<AppLayoutProps, 'minContentWidth' | 'maxContentWidth' | 'navigationOpen' | 'toolsOpen'>, isRefresh: boolean): AppLayoutState;
//# sourceMappingURL=defaults.d.ts.map