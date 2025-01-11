import { Ace } from 'ace-builds';
import { CodeEditorProps } from './interfaces';
import { NonCancelableEventHandler } from '../internal/events';
export declare function useChangeEffect(editor: null | Ace.Editor, onChange?: NonCancelableEventHandler<CodeEditorProps.ChangeDetail>, onDelayedChange?: NonCancelableEventHandler<CodeEditorProps.ChangeDetail>): void;
//# sourceMappingURL=listeners.d.ts.map