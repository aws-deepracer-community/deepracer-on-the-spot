import React from 'react';
import { ButtonProps } from '../../button/interfaces';
import { AppLayoutProps } from '../interfaces';
import { AppLayoutButtonProps } from './interfaces';
export declare const togglesConfig: {
    readonly navigation: {
        readonly TagName: "nav";
        readonly iconName: "menu";
        readonly getLabels: (labels?: AppLayoutProps.Labels) => {
            mainLabel: string | undefined;
            openLabel: string | undefined;
            closeLabel: string | undefined;
        };
    };
    readonly tools: {
        readonly TagName: "aside";
        readonly iconName: "status-info";
        readonly getLabels: (labels?: AppLayoutProps.Labels) => {
            mainLabel: string | undefined;
            openLabel: string | undefined;
            closeLabel: string | undefined;
        };
    };
};
export declare const ToggleButton: React.ForwardRefExoticComponent<AppLayoutButtonProps & React.RefAttributes<{
    focus(): void;
}>>;
interface CloseButtonProps {
    className?: string;
    ariaLabel: string | undefined;
    onClick: () => void;
}
export declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<ButtonProps.Ref>>;
export {};
//# sourceMappingURL=index.d.ts.map