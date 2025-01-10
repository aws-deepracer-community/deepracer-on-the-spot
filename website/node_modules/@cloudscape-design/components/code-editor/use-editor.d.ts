/// <reference types="react" />
import { Ace } from 'ace-builds';
import { CodeEditorProps } from './interfaces';
export declare function useEditor(ace: any, themes?: CodeEditorProps.AvailableThemes, loading?: boolean): {
    editorRef: import("react").RefObject<HTMLDivElement>;
    editor: Ace.Editor | null;
};
export declare function useSyncEditorLabels(editor: null | Ace.Editor, { controlId, ariaLabel, ariaLabelledby, ariaDescribedby, }: {
    controlId?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
}): void;
export declare function useSyncEditorSize(editor: null | Ace.Editor, { width, height }: {
    width?: null | number;
    height?: null | number;
}): {
    onResize: () => void;
};
export declare function useSyncEditorValue(editor: null | Ace.Editor, value: string): void;
export declare function useSyncEditorLanguage(editor: null | Ace.Editor, language: string): void;
export declare function useSyncEditorWrapLines(editor: null | Ace.Editor, wrapLines?: boolean): void;
export declare function useSyncEditorTheme(editor: null | Ace.Editor, theme: CodeEditorProps.Theme): void;
//# sourceMappingURL=use-editor.d.ts.map