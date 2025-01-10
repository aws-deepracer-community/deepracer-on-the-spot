import { Ace } from 'ace-builds';
import { CodeEditorProps } from './interfaces';
export type PaneStatus = 'error' | 'warning' | 'hidden';
export declare const DEFAULT_AVAILABLE_THEMES: {
    light: ("sqlserver" | "chrome" | "clouds" | "crimson_editor" | "dawn" | "dreamweaver" | "eclipse" | "github" | "iplastic" | "solarized_light" | "textmate" | "tomorrow" | "xcode" | "kuroir" | "katzenmilch" | "cloud_editor")[];
    dark: ("terminal" | "ambiance" | "chaos" | "clouds_midnight" | "dracula" | "cobalt" | "gruvbox" | "gob" | "idle_fingers" | "kr_theme" | "merbivore" | "merbivore_soft" | "mono_industrial" | "monokai" | "nord_dark" | "pastel_on_dark" | "solarized_dark" | "tomorrow_night" | "tomorrow_night_blue" | "tomorrow_night_bright" | "tomorrow_night_eighties" | "twilight" | "vibrant_ink" | "cloud_editor_dark")[];
};
export declare function supportsKeyboardAccessibility(ace: any): boolean;
export declare function getDefaultConfig(ace: any): Partial<Ace.EditorOptions>;
export declare function getDefaultTheme(mode: 'light' | 'dark', themes?: CodeEditorProps.AvailableThemes): CodeEditorProps.Theme;
export declare function getAceTheme(theme: CodeEditorProps.Theme): string;
export declare function getLanguageLabel(language: CodeEditorProps.Language): string;
export declare function getStatusButtonId({ paneId, paneStatus }: {
    paneId?: string;
    paneStatus: PaneStatus;
}): string | undefined;
//# sourceMappingURL=util.d.ts.map