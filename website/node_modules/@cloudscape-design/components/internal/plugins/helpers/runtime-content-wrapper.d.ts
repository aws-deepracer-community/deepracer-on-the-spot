/// <reference types="react" />
interface RuntimeContentWrapperProps {
    mountContent: (container: HTMLElement) => void;
    unmountContent: (container: HTMLElement) => void;
}
export declare function RuntimeContentWrapper({ mountContent, unmountContent }: RuntimeContentWrapperProps): JSX.Element;
export {};
//# sourceMappingURL=runtime-content-wrapper.d.ts.map