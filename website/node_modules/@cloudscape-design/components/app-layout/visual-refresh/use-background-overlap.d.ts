import React from 'react';
/**
 * The overlap height has a default set in CSS but can also be dynamically overridden
 * for content types (such as Table and Wizard) that have variable size content in the overlap.
 * If a child component utilizes a sticky header the hasStickyBackground property will determine
 * if the background remains in the same vertical position.
 */
export default function useBackgroundOverlap({ contentHeader, disableContentHeaderOverlap, layoutElement, }: {
    contentHeader: React.ReactNode;
    disableContentHeaderOverlap?: boolean;
    layoutElement: React.Ref<HTMLElement>;
}): {
    hasBackgroundOverlap: boolean;
    updateBackgroundOverlapHeight: (height: number) => void;
};
//# sourceMappingURL=use-background-overlap.d.ts.map