// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import debounce from '../../debounce';
import { sortByPriority } from '../helpers/utils';
export class ActionButtonsController {
    constructor() {
        this.listeners = [];
        this.actions = [];
        this.scheduleUpdate = debounce(() => {
            this.listeners.forEach(listener => listener(this.actions));
        }, 0);
        this.registerAction = (action) => {
            this.actions.push(action);
            this.actions = sortByPriority(this.actions);
            this.scheduleUpdate();
        };
        this.clearRegisteredActions = () => {
            this.actions = [];
        };
        this.onActionRegistered = (listener) => {
            this.listeners.push(listener);
            this.scheduleUpdate();
            return () => {
                this.listeners = this.listeners.filter(item => item !== listener);
            };
        };
    }
    installPublic(api = {}) {
        var _a;
        (_a = api.registerAction) !== null && _a !== void 0 ? _a : (api.registerAction = this.registerAction);
        return api;
    }
    installInternal(internalApi = {}) {
        var _a, _b;
        (_a = internalApi.clearRegisteredActions) !== null && _a !== void 0 ? _a : (internalApi.clearRegisteredActions = this.clearRegisteredActions);
        (_b = internalApi.onActionRegistered) !== null && _b !== void 0 ? _b : (internalApi.onActionRegistered = this.onActionRegistered);
        return internalApi;
    }
}
//# sourceMappingURL=action-buttons.js.map