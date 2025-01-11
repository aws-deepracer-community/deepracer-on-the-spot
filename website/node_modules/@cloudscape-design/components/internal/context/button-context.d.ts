/// <reference types="react" />
import { InternalButtonProps } from '../../button/internal';
export interface ButtonContextProps {
    onClick: ({ variant }: {
        variant: InternalButtonProps['variant'];
    }) => void;
}
export declare const ButtonContext: import("react").Context<ButtonContextProps>;
export declare function useButtonContext(): ButtonContextProps;
//# sourceMappingURL=button-context.d.ts.map