import { TypedOverride } from '../internal/generated/theming';
export type Theme = TypedOverride;
export interface ApplyThemeParams {
    theme: Theme;
    baseThemeId?: string;
}
export interface ApplyThemeResult {
    reset: () => void;
}
export declare function applyTheme({ theme, baseThemeId }: ApplyThemeParams): ApplyThemeResult;
//# sourceMappingURL=index.d.ts.map