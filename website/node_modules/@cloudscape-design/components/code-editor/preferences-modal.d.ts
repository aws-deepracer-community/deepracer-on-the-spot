/// <reference types="react" />
import { CodeEditorProps } from './interfaces';
interface PreferencesModali18nStrings {
    header?: string;
    cancel?: string;
    confirm?: string;
    wrapLines?: string;
    theme?: string;
    lightThemes?: string;
    darkThemes?: string;
    themeFilteringPlaceholder?: string;
    themeFilteringAriaLabel?: string;
    themeFilteringClearAriaLabel?: string;
}
interface PreferencesModalProps {
    preferences?: Partial<CodeEditorProps.Preferences>;
    getModalRoot: CodeEditorProps['getModalRoot'];
    removeModalRoot: CodeEditorProps['removeModalRoot'];
    i18nStrings: PreferencesModali18nStrings;
    themes: CodeEditorProps.AvailableThemes;
    defaultTheme: CodeEditorProps.Theme;
    onConfirm: (preferences: CodeEditorProps.Preferences) => void;
    onDismiss: () => void;
}
declare const _default: (props: PreferencesModalProps) => JSX.Element;
export default _default;
//# sourceMappingURL=preferences-modal.d.ts.map