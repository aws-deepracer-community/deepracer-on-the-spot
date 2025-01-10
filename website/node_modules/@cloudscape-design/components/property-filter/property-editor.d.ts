/// <reference types="react" />
import { I18nStrings, Token, ExtendedOperatorForm, ComparisonOperator, InternalFilteringProperty } from './interfaces';
interface PropertyEditorProps<TokenValue> {
    property: InternalFilteringProperty;
    operator: ComparisonOperator;
    filter: string;
    operatorForm: ExtendedOperatorForm<TokenValue>;
    onCancel: () => void;
    onSubmit: (value: Token) => void;
    i18nStrings: I18nStrings;
}
export declare function PropertyEditor<TokenValue = any>({ property, operator, filter, operatorForm, onCancel, onSubmit, i18nStrings, }: PropertyEditorProps<TokenValue>): JSX.Element;
export {};
//# sourceMappingURL=property-editor.d.ts.map