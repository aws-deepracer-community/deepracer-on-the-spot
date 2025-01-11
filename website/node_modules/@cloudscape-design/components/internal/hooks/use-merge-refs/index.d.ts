import React from 'react';
/**
 * useMergeRefs merges multiple refs into single ref callback.
 *
 * For example
 *  const mergedRef = useMergeRefs(ref1, ref2, ref3)
 *  <div ref={refs}>...</div>
 */
export declare function useMergeRefs<T = any>(...refs: Array<React.RefCallback<T> | React.MutableRefObject<T> | null | undefined>): React.RefCallback<T> | null;
//# sourceMappingURL=index.d.ts.map