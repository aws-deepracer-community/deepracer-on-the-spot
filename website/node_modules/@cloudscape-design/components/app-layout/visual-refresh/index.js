// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { AppLayoutInternalsProvider } from './context';
import Background from './background';
import Breadcrumbs from './breadcrumbs';
import Drawers from './drawers';
import Header from './header';
import Layout from './layout';
import Main from './main';
import MobileToolbar from './mobile-toolbar';
import Navigation from './navigation';
import Notifications from './notifications';
import SplitPanel from './split-panel';
import Tools from './tools';
const AppLayoutWithRef = React.forwardRef(function AppLayout(props, ref) {
    return (React.createElement(AppLayoutInternalsProvider, Object.assign({}, props, { ref: ref }),
        React.createElement(SplitPanel, null,
            React.createElement(Layout, null,
                React.createElement(Background, null),
                React.createElement(Navigation, null),
                React.createElement(MobileToolbar, null),
                React.createElement(Notifications, null),
                React.createElement(Breadcrumbs, null),
                React.createElement(Header, null),
                React.createElement(Main, null),
                React.createElement(SplitPanel.Bottom, null),
                React.createElement(Tools, null,
                    React.createElement(SplitPanel.Side, null)),
                React.createElement(Drawers, null)))));
});
export default AppLayoutWithRef;
//# sourceMappingURL=index.js.map