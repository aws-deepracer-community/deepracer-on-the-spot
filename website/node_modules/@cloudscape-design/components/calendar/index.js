// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalCalendar from './internal';
export default function Calendar(_a) {
    var { locale = '', isDateEnabled = () => true, granularity = 'day' } = _a, props = __rest(_a, ["locale", "isDateEnabled", "granularity"]);
    const baseComponentProps = useBaseComponent('Calendar');
    return (React.createElement(InternalCalendar, Object.assign({}, props, baseComponentProps, { locale: locale, isDateEnabled: isDateEnabled, granularity: granularity })));
}
applyDisplayName(Calendar, 'Calendar');
//# sourceMappingURL=index.js.map