/// <reference types="react" />
import { TableProps } from '../interfaces';
interface OnEditEndOptions {
    cancelled: boolean;
    refocusCell: boolean;
}
interface InlineEditorProps<ItemType> {
    ariaLabels: TableProps['ariaLabels'];
    column: TableProps.ColumnDefinition<ItemType>;
    item: ItemType;
    onEditEnd: (options: OnEditEndOptions) => void;
    submitEdit: TableProps.SubmitEditFunction<ItemType>;
    __onRender?: () => void;
}
export declare function InlineEditor<ItemType>({ ariaLabels, item, column, onEditEnd, submitEdit, __onRender, }: InlineEditorProps<ItemType>): JSX.Element;
export {};
//# sourceMappingURL=inline-editor.d.ts.map