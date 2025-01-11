import { useRef } from 'react';
export default function useLiveAnnouncements({ isDragging, liveAnnouncementDndStarted, liveAnnouncementDndItemReordered, liveAnnouncementDndItemCommitted, liveAnnouncementDndDiscarded, sortedOptions, }) {
    const isFirstAnnouncement = useRef(true);
    if (!isDragging) {
        isFirstAnnouncement.current = true;
    }
    return {
        onDragStart({ active }) {
            if (active && liveAnnouncementDndStarted) {
                const index = sortedOptions.findIndex(option => option.id === active.id);
                return liveAnnouncementDndStarted(index + 1, sortedOptions.length);
            }
        },
        onDragOver({ active, over }) {
            if (liveAnnouncementDndItemReordered) {
                // Don't announce on the first dragOver because it's redundant with onDragStart.
                if (isFirstAnnouncement.current) {
                    isFirstAnnouncement.current = false;
                    if (!over || over.id === active.id) {
                        return;
                    }
                }
                const initialIndex = sortedOptions.findIndex(option => option.id === active.id);
                const currentIdex = over ? sortedOptions.findIndex(option => option.id === over.id) : initialIndex;
                return liveAnnouncementDndItemReordered(initialIndex + 1, currentIdex + 1, sortedOptions.length);
            }
        },
        onDragEnd({ active, over }) {
            if (liveAnnouncementDndItemCommitted) {
                const initialIndex = sortedOptions.findIndex(option => option.id === active.id);
                const finalIndex = over ? sortedOptions.findIndex(option => option.id === over.id) : initialIndex;
                return liveAnnouncementDndItemCommitted(initialIndex + 1, finalIndex + 1, sortedOptions.length);
            }
        },
        onDragCancel() {
            return liveAnnouncementDndDiscarded;
        },
    };
}
//# sourceMappingURL=use-live-announcements.js.map