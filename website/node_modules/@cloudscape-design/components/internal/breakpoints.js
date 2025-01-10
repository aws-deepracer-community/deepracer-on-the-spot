const BREAKPOINT_MAPPING = [
    ['xl', 1840],
    ['l', 1320],
    ['m', 1120],
    ['s', 912],
    ['xs', 688],
    ['xxs', 465],
    ['default', -1],
];
export const mobileBreakpoint = BREAKPOINT_MAPPING.filter(b => b[0] === 'xs')[0][1];
const BREAKPOINTS_DESCENDING = BREAKPOINT_MAPPING.map(([bp]) => bp);
/**
 * Take a breakpoint mapping and return the breakpoint value that most closely matches the actual breakpoint.
 */
export function matchBreakpointMapping(subset, actual) {
    const qualifyingBreakpoints = BREAKPOINT_MAPPING.slice(BREAKPOINTS_DESCENDING.indexOf(actual));
    for (const [breakpoint] of qualifyingBreakpoints) {
        const breakpointValue = subset[breakpoint];
        if (breakpointValue !== undefined) {
            return breakpointValue;
        }
    }
    return null;
}
/**
 * Get the named breakpoint for a provided width, optionally filtering to a subset of breakpoints.
 */
export function getMatchingBreakpoint(width, breakpointFilter) {
    for (const [breakpoint, breakpointWidth] of BREAKPOINT_MAPPING) {
        if (width > breakpointWidth && (!breakpointFilter || breakpointFilter.indexOf(breakpoint) !== -1)) {
            return breakpoint;
        }
    }
    return 'default';
}
export function getBreakpointValue(breakpoint) {
    return BREAKPOINT_MAPPING.find(bp => bp[0] === breakpoint)[1];
}
//# sourceMappingURL=breakpoints.js.map