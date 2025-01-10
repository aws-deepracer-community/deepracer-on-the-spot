interface RefShim<T> {
    current: T | null;
}
export interface ActionContext {
    type: string;
    headerRef: RefShim<HTMLElement>;
    contentRef: RefShim<HTMLElement>;
}
export interface ActionConfig {
    id: string;
    orderPriority?: number;
    mountContent: (container: HTMLElement, context: ActionContext) => void;
    unmountContent: (container: HTMLElement) => void;
}
export type ActionRegistrationListener = (action: Array<ActionConfig>) => void;
export interface ActionsApiPublic {
    registerAction(config: ActionConfig): void;
}
export interface ActionsApiInternal {
    clearRegisteredActions(): void;
    onActionRegistered(listener: ActionRegistrationListener): () => void;
}
export declare class ActionButtonsController {
    private listeners;
    private actions;
    private scheduleUpdate;
    registerAction: (action: ActionConfig) => void;
    clearRegisteredActions: () => void;
    onActionRegistered: (listener: ActionRegistrationListener) => () => void;
    installPublic(api?: Partial<ActionsApiPublic>): ActionsApiPublic;
    installInternal(internalApi?: Partial<ActionsApiInternal>): ActionsApiInternal;
}
export {};
//# sourceMappingURL=action-buttons.d.ts.map