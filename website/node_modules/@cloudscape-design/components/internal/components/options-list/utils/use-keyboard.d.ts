import { BaseKeyDetail, CancelableEventHandler } from '../../../events';
interface UseMenuKeyboard {
    (inputProps: {
        moveHighlight: (direction: -1 | 1, startIndex?: number) => void;
        selectOption: () => void;
        goHome: () => void;
        goEnd: () => void;
        closeDropdown: () => void;
        preventNativeSpace?: boolean;
    }): CancelableEventHandler<BaseKeyDetail>;
}
export declare const useMenuKeyboard: UseMenuKeyboard;
interface UseTriggerKeyboard {
    (inputProps: {
        openDropdown: () => void;
        goHome: () => void;
    }): CancelableEventHandler<BaseKeyDetail>;
}
export declare const useTriggerKeyboard: UseTriggerKeyboard;
export {};
//# sourceMappingURL=use-keyboard.d.ts.map