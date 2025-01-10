import React from 'react';
import { TilesProps } from './interfaces';
import { useContainerBreakpoints } from '../internal/hooks/container-queries';
interface TileProps {
    item: TilesProps.TilesDefinition;
    selected: boolean;
    name: string;
    breakpoint: ReturnType<typeof useContainerBreakpoints>[0];
    onChange: TilesProps['onChange'];
}
export declare const Tile: React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=tile.d.ts.map