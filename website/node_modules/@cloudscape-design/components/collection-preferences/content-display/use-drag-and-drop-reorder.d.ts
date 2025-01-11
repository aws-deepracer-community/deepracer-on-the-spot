import React from 'react';
import { CollisionDetection, KeyboardCoordinateGetter, UniqueIdentifier } from '@dnd-kit/core';
import { CollectionPreferencesProps } from '../interfaces';
export default function useDragAndDropReorder({ sortedOptions, }: {
    sortedOptions: ReadonlyArray<CollectionPreferencesProps.VisibleContentOption>;
}): {
    activeItem: UniqueIdentifier | null;
    collisionDetection: CollisionDetection;
    coordinateGetter: KeyboardCoordinateGetter;
    handleKeyDown: (event: React.KeyboardEvent) => void;
    sensors: import("@dnd-kit/core").SensorDescriptor<import("@dnd-kit/core").SensorOptions>[];
    setActiveItem: (id: UniqueIdentifier | null) => void;
};
//# sourceMappingURL=use-drag-and-drop-reorder.d.ts.map