/// <reference types="react" />
import { InternalColumnLayoutProps } from './interfaces';
export declare const COLUMN_TRIGGERS: readonly ["default", "xxs", "xs"];
export type ColumnLayoutBreakpoint = typeof COLUMN_TRIGGERS[number] | null;
/**
 * A responsive grid layout.
 */
export default function ColumnLayout({ columns, variant, borders, disableGutters, minColumnWidth, children, __breakpoint, __internalRootRef, ...restProps }: InternalColumnLayoutProps): JSX.Element;
//# sourceMappingURL=internal.d.ts.map