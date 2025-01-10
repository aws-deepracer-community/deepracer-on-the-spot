import { useEffect, useRef } from 'react';
import defaultOptionDescription from '../../internal/components/option/option-announcer';
/**
 * The hook produces the live region string to be announced when an option is highlighted.
 * This is a workaround to account for the issues with assistive technologies.
 *
 * If the testing reveals no issues with the native announcements the live-region can be removed.
 */
export function useAnnouncement({ announceSelected, highlightedOption, getParent, selectedAriaLabel, renderHighlightedAriaLive, }) {
    const prevAnnouncedGroup = useRef(undefined);
    // Record previously announced group with a delay to account for possible re-renders of the hook.
    useEffect(() => {
        if (highlightedOption) {
            const frameId = requestAnimationFrame(() => {
                prevAnnouncedGroup.current = getParent(highlightedOption);
            });
            return () => cancelAnimationFrame(frameId);
        }
    });
    if (!highlightedOption) {
        return '';
    }
    const option = highlightedOption.option;
    const parent = getParent(highlightedOption);
    // Only announce parent group if it wasn't announced with previous option.
    const group = parent && parent !== prevAnnouncedGroup.current ? parent : undefined;
    // Use custom renderer if provided.
    if (renderHighlightedAriaLive) {
        return renderHighlightedAriaLive(option, group);
    }
    // Use default renderer with selected ARIA label if defined and relevant.
    const selectedAnnouncement = announceSelected && selectedAriaLabel ? selectedAriaLabel : '';
    const defaultDescription = defaultOptionDescription(option, group);
    return [selectedAnnouncement, defaultDescription].filter(Boolean).join(' ');
}
//# sourceMappingURL=use-announcement.js.map