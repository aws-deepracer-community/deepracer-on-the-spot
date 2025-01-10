/// <reference types="react" />
import { FlashbarProps } from './interfaces';
export declare function useFlashbar({ items, onItemsAdded, onItemsChanged, onItemsRemoved, ...restProps }: FlashbarProps & {
    onItemsAdded?: (items: FlashbarProps.MessageDefinition[]) => void;
    onItemsRemoved?: (items: FlashbarProps.MessageDefinition[]) => void;
    onItemsChanged?: (options?: {
        allItemsHaveId?: boolean;
        isReducedMotion?: boolean;
    }) => void;
}): {
    allItemsHaveId: boolean;
    baseProps: import("../internal/base-component").BaseComponentProps;
    breakpoint: "default" | "xs" | null;
    isReducedMotion: boolean;
    isVisualRefresh: boolean;
    mergedRef: ((instance: any) => void) | null;
    ref: import("react").MutableRefObject<HTMLDivElement | null>;
};
//# sourceMappingURL=common.d.ts.map