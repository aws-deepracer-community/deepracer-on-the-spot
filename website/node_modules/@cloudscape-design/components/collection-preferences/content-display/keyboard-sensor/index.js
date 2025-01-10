import { subtract as getCoordinatesDelta, getOwnerDocument, getWindow, isKeyboardEvent, } from '@dnd-kit/utilities';
import { defaultCoordinates } from '@dnd-kit/core';
import { applyScroll } from './utilities/scroll';
import { EventName } from './utilities/events';
import { Listeners } from './utilities/listeners';
import { defaultKeyboardCodes } from './defaults';
import { scrollElementIntoView } from '../../../internal/utils/scrollable-containers';
// Slightly modified version of @dnd-kit's KeyboardSensor:
// https://github.com/clauderic/dnd-kit/blob/master/packages/core/src/sensors/keyboard/KeyboardSensor.ts
// The only difference is that here, reordering is deactivated on blur, as in
// this PR: https://github.com/clauderic/dnd-kit/pull/1087.
// If it is merged, then @dnd-kit's KeyboardSensor can be used instead
// and all files under this directory (`keyboard-sensor`) can be removed.
// Changes from mainstream are marked below as "Customization"
export class KeyboardSensor {
    constructor(props) {
        this.props = props;
        this.autoScrollEnabled = false;
        const { event: { target }, } = props;
        this.props = props;
        this.listeners = new Listeners(getOwnerDocument(target));
        this.windowListeners = new Listeners(getWindow(target));
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.attach();
    }
    attach() {
        var _a;
        this.handleStart();
        this.windowListeners.add(EventName.Resize, this.handleCancel);
        this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
        // Customization: deactivate reordering on blur event
        (_a = this.props.event.target) === null || _a === void 0 ? void 0 : _a.addEventListener(EventName.Blur, this.handleCancel);
        setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
    }
    handleStart() {
        const { activeNode, onStart } = this.props;
        const node = activeNode.node.current;
        if (node) {
            scrollElementIntoView(node);
        }
        onStart(defaultCoordinates);
    }
    handleKeyDown(event) {
        if (isKeyboardEvent(event)) {
            const { active, context, options } = this.props;
            const { keyboardCodes = defaultKeyboardCodes, coordinateGetter } = options;
            const { code } = event;
            if (keyboardCodes.end.indexOf(code) !== -1) {
                this.handleEnd(event);
                return;
            }
            if (keyboardCodes.cancel.indexOf(code) !== -1) {
                this.handleCancel(event);
                return;
            }
            const { collisionRect } = context.current;
            const currentCoordinates = collisionRect ? { x: collisionRect.left, y: collisionRect.top } : defaultCoordinates;
            if (!this.referenceCoordinates) {
                this.referenceCoordinates = currentCoordinates;
            }
            if (!coordinateGetter) {
                return;
            }
            const newCoordinates = coordinateGetter(event, {
                active,
                context: context.current,
                currentCoordinates,
            });
            if (newCoordinates) {
                const { scrollableAncestors } = context.current;
                const direction = event.code;
                const scrolled = applyScroll({ currentCoordinates, direction, newCoordinates, scrollableAncestors });
                if (!scrolled) {
                    this.handleMove(event, getCoordinatesDelta(newCoordinates, this.referenceCoordinates));
                }
            }
        }
    }
    handleMove(event, coordinates) {
        const { onMove } = this.props;
        event.preventDefault();
        onMove(coordinates);
    }
    handleEnd(event) {
        const { onEnd } = this.props;
        event.preventDefault();
        this.detach();
        onEnd();
    }
    handleCancel(event) {
        const { onCancel } = this.props;
        // Customization: do not prevent browser from managing native focus
        if (event.type !== EventName.Blur) {
            event.preventDefault();
        }
        this.detach();
        onCancel();
    }
    detach() {
        var _a;
        // Customization: clean up listener for blur event
        (_a = this.props.event.target) === null || _a === void 0 ? void 0 : _a.removeEventListener(EventName.Blur, this.handleCancel);
        this.listeners.removeAll();
        this.windowListeners.removeAll();
    }
}
KeyboardSensor.activators = [
    {
        eventName: 'onKeyDown',
        handler: (event, { keyboardCodes = defaultKeyboardCodes, onActivation }, { active }) => {
            const { code } = event.nativeEvent;
            if (keyboardCodes.start.indexOf(code) !== -1) {
                const activator = active.activatorNode.current;
                if (activator && event.target !== activator) {
                    return false;
                }
                event.preventDefault();
                onActivation === null || onActivation === void 0 ? void 0 : onActivation({ event: event.nativeEvent });
                return true;
            }
            return false;
        },
    },
];
//# sourceMappingURL=index.js.map