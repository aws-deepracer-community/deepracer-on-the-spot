import React from 'react';
import { Breakpoint } from '../../breakpoints';
/**
 * Re-renders the component when the breakpoint for the component changes. Scopes the re-renders to the specific
 * breakpoints you want to break at. "default" is always included as a fallback, so ["xs"] would trigger for
 * "default" and "xs".
 *
 * @param triggers The relevant breakpoints to trigger for.
 */
export declare function useContainerBreakpoints<T extends readonly Breakpoint[], E extends Element = any>(triggers?: T): ["default" | T[number] | null, React.Ref<E>];
//# sourceMappingURL=use-container-breakpoints.d.ts.map