/**
 * Hook to implement scroll-spy functionality.
 *
 * @param hrefs An array of href strings that correspond to the IDs of the target elements on the page.
 * The hrefs should be sorted in the order they appear on the page for accurate scroll-spy behavior.
 * @param scrollSpyOffset The number of pixels to offset from the top of the document when activating anchors.
 * Useful for accommodating fixed or sticky headers.
 * @param activeHref The currently active href. If provided, the hook will operate in a controlled manner,
 * and the scroll-spy logic will be disabled.
 *
 * @returns {string | undefined} - The href of the currently active element as per scroll position, or undefined if none is active.
 */
export default function useScrollSpy({ hrefs, scrollSpyOffset, activeHref, }: {
    hrefs: string[];
    scrollSpyOffset: number;
    activeHref?: string;
}): string | undefined;
//# sourceMappingURL=use-scroll-spy.d.ts.map