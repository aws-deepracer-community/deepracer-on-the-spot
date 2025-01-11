// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { DrawersController } from './controllers/drawers';
import { ActionButtonsController } from './controllers/action-buttons';
const storageKey = Symbol.for('awsui-plugin-api');
function findUpApi(currentWindow) {
    try {
        if (currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow[storageKey]) {
            return currentWindow[storageKey];
        }
        if (!currentWindow || currentWindow.parent === currentWindow) {
            // When the window has no more parents, it references itself
            return undefined;
        }
        return findUpApi(currentWindow.parent);
    }
    catch (ex) {
        // Most likely a cross-origin access error
        return undefined;
    }
}
export function loadApi() {
    if (typeof window === 'undefined') {
        return installApi({});
    }
    const win = window;
    const existingApi = findUpApi(win);
    win[storageKey] = installApi(existingApi !== null && existingApi !== void 0 ? existingApi : {});
    return win[storageKey];
}
export const { awsuiPlugins, awsuiPluginsInternal } = loadApi();
function installApi(api) {
    var _a, _b;
    (_a = api.awsuiPlugins) !== null && _a !== void 0 ? _a : (api.awsuiPlugins = {});
    (_b = api.awsuiPluginsInternal) !== null && _b !== void 0 ? _b : (api.awsuiPluginsInternal = {});
    const appLayoutDrawers = new DrawersController();
    api.awsuiPlugins.appLayout = appLayoutDrawers.installPublic(api.awsuiPlugins.appLayout);
    api.awsuiPluginsInternal.appLayout = appLayoutDrawers.installInternal(api.awsuiPluginsInternal.appLayout);
    const alertActions = new ActionButtonsController();
    api.awsuiPlugins.alert = alertActions.installPublic(api.awsuiPlugins.alert);
    api.awsuiPluginsInternal.alert = alertActions.installInternal(api.awsuiPluginsInternal.alert);
    const flashbarActions = new ActionButtonsController();
    api.awsuiPlugins.flashbar = flashbarActions.installPublic(api.awsuiPlugins.flashbar);
    api.awsuiPluginsInternal.flashbar = flashbarActions.installInternal(api.awsuiPluginsInternal.flashbar);
    return api;
}
//# sourceMappingURL=api.js.map