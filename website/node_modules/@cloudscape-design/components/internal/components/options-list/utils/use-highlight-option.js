// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useState } from 'react';
export class HighlightType {
    constructor(type, moveFocus = type === 'keyboard') {
        this.type = type;
        this.moveFocus = moveFocus;
    }
}
export function useHighlightedOption({ options, isHighlightable, }) {
    const [highlightedIndex, setHighlightedIndexState] = useState(-1);
    const [highlightType, setHighlightType] = useState(new HighlightType('keyboard'));
    const setHighlightedIndex = useCallback((index, highlightType) => {
        setHighlightedIndexState(index);
        setHighlightType(highlightType);
    }, []);
    const highlightedOption = options[highlightedIndex] && isHighlightable(options[highlightedIndex]) ? options[highlightedIndex] : undefined;
    const moveHighlightFrom = (direction, startIndex = highlightedIndex, highlightType) => {
        const fromBottomEnd = startIndex === -1 && direction === -1;
        let newIndex = fromBottomEnd ? options.length : startIndex;
        do {
            newIndex += direction;
        } while (options[newIndex] && !isHighlightable(options[newIndex]));
        if (options[newIndex]) {
            setHighlightedIndex(newIndex, highlightType);
        }
    };
    const moveHighlight = (direction, highlightType) => moveHighlightFrom(direction, highlightedIndex, highlightType);
    const highlightOption = useCallback((option, highlightType) => {
        const index = options.indexOf(option);
        setHighlightedIndex(index, highlightType);
    }, [options, setHighlightedIndex]);
    return [
        { highlightType, highlightedIndex, highlightedOption },
        {
            setHighlightedIndexWithMouse: (index, moveFocus = false) => setHighlightedIndex(index, new HighlightType('mouse', moveFocus)),
            moveHighlightWithKeyboard: (direction) => moveHighlight(direction, new HighlightType('keyboard')),
            highlightOptionWithKeyboard: (option) => highlightOption(option, new HighlightType('keyboard')),
            resetHighlightWithKeyboard: () => setHighlightedIndex(-1, new HighlightType('keyboard')),
            goHomeWithKeyboard: () => moveHighlightFrom(1, -1, new HighlightType('keyboard')),
            goEndWithKeyboard: () => moveHighlightFrom(-1, options.length, new HighlightType('keyboard')),
        },
    ];
}
//# sourceMappingURL=use-highlight-option.js.map