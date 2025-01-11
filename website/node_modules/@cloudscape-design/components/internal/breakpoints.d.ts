export type Breakpoint = 'default' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';
export declare const mobileBreakpoint: number;
/**
 * Take a breakpoint mapping and return the breakpoint value that most closely matches the actual breakpoint.
 */
export declare function matchBreakpointMapping<T>(subset: Partial<Record<Breakpoint, T>>, actual: Breakpoint): T | null;
/**
 * Get the named breakpoint for a provided width, optionally filtering to a subset of breakpoints.
 */
export declare function getMatchingBreakpoint<T extends readonly Breakpoint[]>(width: number, breakpointFilter?: T): T[number] | 'default';
export declare function getBreakpointValue(breakpoint: Breakpoint): number;
//# sourceMappingURL=breakpoints.d.ts.map