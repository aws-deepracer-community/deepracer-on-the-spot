import { FlashbarProps } from './interfaces';
import { IconProps } from '../icon/interfaces';
export declare const FOCUS_THROTTLE_DELAY = 2000;
export interface StackableItem extends FlashbarProps.MessageDefinition {
    expandedIndex: number;
    collapsedIndex?: number;
}
export declare function getItemType(item: FlashbarProps.MessageDefinition): FlashbarProps.Type;
export declare function getItemColor(item: FlashbarProps.MessageDefinition): string;
export declare function getVisibleCollapsedItems(items: ReadonlyArray<FlashbarProps.MessageDefinition>, desiredLength: number): ReadonlyArray<StackableItem>;
export declare function getFlashTypeCount(items: readonly FlashbarProps.MessageDefinition[]): Record<FlashbarProps.Type, number>;
export type LabelName = 'errorIconAriaLabel' | 'warningIconAriaLabel' | 'successIconAriaLabel' | 'infoIconAriaLabel' | 'inProgressIconAriaLabel';
export declare const counterTypes: {
    type: FlashbarProps.Type;
    labelName: LabelName;
    iconName: IconProps.Name;
}[];
//# sourceMappingURL=utils.d.ts.map