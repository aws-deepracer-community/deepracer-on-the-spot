import { BoundingBox } from '../../utils/scrollable-containers';
interface AvailableSpace {
    blockStart: number;
    blockEnd: number;
    inlineStart: number;
    inlineEnd: number;
}
export interface DropdownPosition {
    blockSize: string;
    inlineSize: string;
    dropBlockStart: boolean;
    dropInlineStart: boolean;
    insetInlineStart: string;
}
export interface InteriorDropdownPosition extends DropdownPosition {
    insetBlockEnd: string;
    insetBlockStart: string;
}
export declare const defaultMaxDropdownWidth: number;
export declare const getAvailableSpace: ({ trigger, overflowParents, stretchWidth, stretchHeight, isMobile, }: {
    trigger: HTMLElement;
    overflowParents: ReadonlyArray<BoundingBox>;
    stretchWidth?: boolean | undefined;
    stretchHeight?: boolean | undefined;
    isMobile?: boolean | undefined;
}) => AvailableSpace;
export declare const getInteriorAvailableSpace: ({ trigger, overflowParents, isMobile, }: {
    trigger: HTMLElement;
    overflowParents: ReadonlyArray<BoundingBox>;
    isMobile?: boolean | undefined;
}) => AvailableSpace;
export declare const getWidths: ({ triggerElement, dropdownElement, desiredMinWidth, stretchBeyondTriggerWidth, }: {
    triggerElement: HTMLElement;
    dropdownElement: HTMLElement;
    desiredMinWidth?: number | undefined;
    stretchBeyondTriggerWidth?: boolean | undefined;
}) => {
    idealWidth: number;
    minWidth: number;
    triggerInlineSize: number;
};
export declare const hasEnoughSpaceToStretchBeyondTriggerWidth: ({ triggerElement, dropdownElement, desiredMinWidth, expandToViewport, stretchWidth, stretchHeight, isMobile, }: {
    triggerElement: HTMLElement;
    dropdownElement: HTMLElement;
    desiredMinWidth?: number | undefined;
    expandToViewport: boolean;
    stretchWidth: boolean;
    stretchHeight: boolean;
    isMobile: boolean;
}) => boolean;
export declare const getDropdownPosition: ({ triggerElement, dropdownElement, overflowParents, minWidth: desiredMinWidth, preferCenter, stretchWidth, stretchHeight, isMobile, stretchBeyondTriggerWidth, }: {
    triggerElement: HTMLElement;
    dropdownElement: HTMLElement;
    overflowParents: ReadonlyArray<BoundingBox>;
    minWidth?: number | undefined;
    preferCenter?: boolean | undefined;
    stretchWidth?: boolean | undefined;
    stretchHeight?: boolean | undefined;
    isMobile?: boolean | undefined;
    stretchBeyondTriggerWidth?: boolean | undefined;
}) => DropdownPosition;
export declare const getInteriorDropdownPosition: (trigger: HTMLElement, dropdown: HTMLElement, overflowParents: ReadonlyArray<BoundingBox>, isMobile?: boolean) => InteriorDropdownPosition;
export declare const calculatePosition: (dropdownElement: HTMLDivElement, triggerElement: HTMLDivElement, verticalContainerElement: HTMLDivElement, interior: boolean, expandToViewport: boolean, preferCenter: boolean, stretchWidth: boolean, stretchHeight: boolean, isMobile: boolean, minWidth?: number, stretchBeyondTriggerWidth?: boolean) => [DropdownPosition, DOMRect];
export {};
//# sourceMappingURL=dropdown-fit-handler.d.ts.map