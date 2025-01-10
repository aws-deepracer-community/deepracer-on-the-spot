import { CellOffsets, StickyColumnsCellState, StickyColumnsProps, StickyColumnsWrapperState } from './interfaces';
export declare function isCellStatesEqual(s1: null | StickyColumnsCellState, s2: null | StickyColumnsCellState): boolean;
export declare function isWrapperStatesEqual(s1: StickyColumnsWrapperState, s2: StickyColumnsWrapperState): boolean;
export declare function updateCellOffsets(cells: Map<PropertyKey, HTMLElement>, props: StickyColumnsProps): CellOffsets;
//# sourceMappingURL=utils.d.ts.map