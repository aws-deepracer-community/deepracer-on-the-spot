import { DrawersApiInternal, DrawersApiPublic } from './controllers/drawers';
import { ActionsApiInternal, ActionsApiPublic } from './controllers/action-buttons';
interface AwsuiApi {
    awsuiPlugins: {
        appLayout: DrawersApiPublic;
        alert: ActionsApiPublic;
        flashbar: ActionsApiPublic;
    };
    awsuiPluginsInternal: {
        appLayout: DrawersApiInternal;
        alert: ActionsApiInternal;
        flashbar: ActionsApiInternal;
    };
}
export declare function loadApi(): AwsuiApi;
export declare const awsuiPlugins: {
    appLayout: DrawersApiPublic;
    alert: ActionsApiPublic;
    flashbar: ActionsApiPublic;
}, awsuiPluginsInternal: {
    appLayout: DrawersApiInternal;
    alert: ActionsApiInternal;
    flashbar: ActionsApiInternal;
};
export {};
//# sourceMappingURL=api.d.ts.map