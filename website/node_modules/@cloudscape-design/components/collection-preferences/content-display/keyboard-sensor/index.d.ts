import type { Activators, SensorInstance } from '@dnd-kit/core';
import { KeyboardSensorOptions, KeyboardSensorProps } from '@dnd-kit/core';
export declare class KeyboardSensor implements SensorInstance {
    private props;
    autoScrollEnabled: boolean;
    private referenceCoordinates;
    private listeners;
    private windowListeners;
    constructor(props: KeyboardSensorProps);
    private attach;
    private handleStart;
    private handleKeyDown;
    private handleMove;
    private handleEnd;
    private handleCancel;
    private detach;
    static activators: Activators<KeyboardSensorOptions>;
}
//# sourceMappingURL=index.d.ts.map