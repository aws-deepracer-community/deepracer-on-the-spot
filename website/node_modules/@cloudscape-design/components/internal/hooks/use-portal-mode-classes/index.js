// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import { useVisualContext } from '../../components/visual-context';
import { useCurrentMode, useDensityMode } from '@cloudscape-design/component-toolkit/internal';
import { useVisualRefresh } from '../use-visual-mode';
export function usePortalModeClasses(ref) {
    const colorMode = useCurrentMode(ref);
    const densityMode = useDensityMode(ref);
    const context = useVisualContext(ref);
    const visualRefresh = useVisualRefresh();
    return clsx({
        'awsui-polaris-dark-mode awsui-dark-mode': colorMode === 'dark',
        'awsui-polaris-compact-mode awsui-compact-mode': densityMode === 'compact',
        'awsui-visual-refresh': visualRefresh,
        [`awsui-context-${context}`]: context,
    });
}
//# sourceMappingURL=index.js.map