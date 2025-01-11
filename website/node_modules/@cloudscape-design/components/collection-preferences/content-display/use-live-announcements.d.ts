import { CollectionPreferencesProps } from '../interfaces';
import { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
export default function useLiveAnnouncements({ isDragging, liveAnnouncementDndStarted, liveAnnouncementDndItemReordered, liveAnnouncementDndItemCommitted, liveAnnouncementDndDiscarded, sortedOptions, }: Partial<CollectionPreferencesProps.ContentDisplayPreference> & {
    isDragging: boolean;
    sortedOptions: ReadonlyArray<CollectionPreferencesProps.ContentDisplayItem>;
}): {
    onDragStart({ active }: DragStartEvent): string | undefined;
    onDragOver({ active, over }: DragOverEvent): string | undefined;
    onDragEnd({ active, over }: DragEndEvent): string | undefined;
    onDragCancel(): string | undefined;
};
//# sourceMappingURL=use-live-announcements.d.ts.map