/// <reference types="react" />
import { IconProps } from '../../../icon/interfaces';
interface LabelProps {
    label?: string;
    prefix?: string;
    highlightText?: string;
    triggerVariant: boolean;
}
export declare const Label: ({ label, prefix, highlightText, triggerVariant }: LabelProps) => JSX.Element;
interface LabelTagProps {
    labelTag?: string;
    highlightText?: string;
    triggerVariant: boolean;
}
export declare const LabelTag: ({ labelTag, highlightText, triggerVariant }: LabelTagProps) => JSX.Element | null;
interface DescriptionProps {
    description?: string;
    highlightedOption: boolean;
    highlightText?: string;
    selectedOption: boolean;
    triggerVariant: boolean;
}
export declare const Description: ({ description, highlightedOption, highlightText, selectedOption, triggerVariant, }: DescriptionProps) => JSX.Element | null;
interface TagsProps {
    tags?: ReadonlyArray<string>;
    highlightedOption: boolean;
    highlightText?: string;
    selectedOption: boolean;
    triggerVariant: boolean;
}
export declare const Tags: ({ tags, highlightedOption, highlightText, selectedOption, triggerVariant }: TagsProps) => JSX.Element | null;
interface FilteringTagProps {
    filteringTags?: ReadonlyArray<string>;
    highlightedOption: boolean;
    highlightText?: string;
    selectedOption: boolean;
    triggerVariant: boolean;
}
export declare const FilteringTags: ({ filteringTags, highlightedOption, highlightText, selectedOption, triggerVariant, }: FilteringTagProps) => JSX.Element | null;
export declare const OptionIcon: (props: IconProps) => JSX.Element | null;
export {};
//# sourceMappingURL=option-parts.d.ts.map