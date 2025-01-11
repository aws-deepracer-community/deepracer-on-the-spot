// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { parseCssVariable } from './dom';
import { categoryPalette } from '../styles/colors';
import { colorChartsThresholdNeutral as thresholdColor } from '../generated/styles/tokens';
export default function createCategoryColorScale(items, isThreshold = () => false, getOwnColor = () => null) {
    const colors = [];
    let categoryIndex = 0;
    for (const it of items) {
        const ownColor = getOwnColor(it);
        const defaultColor = isThreshold(it) ? thresholdColor : categoryPalette[categoryIndex % categoryPalette.length];
        colors.push(parseCssVariable(ownColor || defaultColor));
        if (!isThreshold(it) && !ownColor) {
            categoryIndex++;
        }
    }
    return colors;
}
//# sourceMappingURL=create-category-color-scale.js.map