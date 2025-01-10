export interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}
export interface ThrottledFunction<F extends (...args: any) => any> {
    (...args: Parameters<F>): void;
    cancel(): void;
}
export declare function throttle<F extends (...args: any) => any>(func: F, delay: number, { trailing }?: ThrottleOptions): ThrottledFunction<F>;
//# sourceMappingURL=throttle.d.ts.map