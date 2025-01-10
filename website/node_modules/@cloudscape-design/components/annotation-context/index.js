import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { OpenAnnotation } from './annotation/open-annotation';
import { ClosedAnnotation } from './annotation/closed-annotation';
import { hotspotContext } from './context';
import { fireNonCancelableEvent } from '../internal/events';
import { useTelemetry } from '../internal/hooks/use-telemetry';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { getStepInfo } from './utils';
// constant empty array to keep hook dependency stable
const emptyTasks = [];
export default function AnnotationContext({ currentTutorial, children, onStepChange, onFinish: onFinishHandler, onStartTutorial, onExitTutorial, i18nStrings, }) {
    var _a, _b, _c, _d;
    useTelemetry('AnnotationContext');
    const [open, setOpen] = useState(true);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    useEffect(() => {
        // When a tutorial is started, we reset the progress to the first step.
        setCurrentStepIndex(0);
        setOpen(true);
    }, [currentTutorial, setOpen]);
    const [availableHotspots, setAvailableHotspots] = useState({});
    // availableHotspots is mirrored in this ref to prevent endless loops
    // in between registerHotspot and unregisterHotspot callbacks.
    const availableHotspotsRef = useRef(availableHotspots);
    const annotations = currentTutorial ? currentTutorial.tasks : emptyTasks;
    const { task, step, localIndex, taskIndex } = getStepInfo(annotations, currentStepIndex);
    const currentId = step === null || step === void 0 ? void 0 : step.hotspotId;
    const totalStepCount = annotations.map(a => a.steps.length).reduce((a, b) => a + b, 0);
    const id2index = useMemo(() => {
        const mapping = {};
        let counter = 0;
        for (const annotation of annotations) {
            for (const step of annotation.steps) {
                if (mapping[step.hotspotId] === undefined) {
                    mapping[step.hotspotId] = counter;
                }
                counter++;
            }
        }
        return mapping;
    }, [annotations]);
    const openNextStep = useCallback(() => {
        const newStepIndex = Math.min(currentStepIndex + 1, totalStepCount);
        setCurrentStepIndex(newStepIndex);
        fireNonCancelableEvent(onStepChange, { step: newStepIndex, reason: 'next' });
    }, [currentStepIndex, onStepChange, totalStepCount]);
    const openPreviousStep = useCallback(() => {
        const newStepIndex = Math.max(currentStepIndex - 1, 0);
        setCurrentStepIndex(newStepIndex);
        fireNonCancelableEvent(onStepChange, { step: newStepIndex, reason: 'previous' });
    }, [onStepChange, currentStepIndex]);
    const onFinish = useCallback(() => fireNonCancelableEvent(onFinishHandler), [onFinishHandler]);
    /**
     * If the currently open hotspot disappears from the page (e.g. because of a react-router navigation),
     * this Effect detects the nearest available hotspot and changes to it. This allows us to e.g. automatically
     * advance to the first step on the new page (or the last step on the previous page, in case the user
     * navigates back).
     */
    const isCurrentHotspotAvailable = currentId ? availableHotspots[currentId] : null;
    useEffect(() => {
        if (!currentId || availableHotspotsRef.current[currentId]) {
            return;
        }
        const findNearestHotspot = () => {
            let nearestHotspot = undefined;
            let nearestDistance = Infinity;
            for (const hotspotId of Object.keys(availableHotspotsRef.current)) {
                const distanceFromCurrentHotspot = Math.abs(id2index[hotspotId] - currentStepIndex);
                if (distanceFromCurrentHotspot < nearestDistance) {
                    nearestDistance = distanceFromCurrentHotspot;
                    nearestHotspot = hotspotId;
                }
            }
            return nearestHotspot;
        };
        const nearestHotspot = findNearestHotspot();
        if (nearestHotspot) {
            const newStepIndex = id2index[nearestHotspot];
            setCurrentStepIndex(newStepIndex);
            setOpen(true);
            fireNonCancelableEvent(onStepChange, { step: newStepIndex, reason: 'auto-fallback' });
        }
    }, [annotations, isCurrentHotspotAvailable, currentId, currentStepIndex, id2index, onStepChange]);
    const onDismiss = useCallback(() => {
        setOpen(false);
    }, [setOpen]);
    const onOpen = useCallback((stepIndex) => {
        setCurrentStepIndex(stepIndex);
        fireNonCancelableEvent(onStepChange, { step: stepIndex, reason: 'open' });
        setOpen(true);
    }, [onStepChange, setOpen]);
    const idOfPreviousHotspot = (_a = getStepInfo(annotations, currentStepIndex - 1).step) === null || _a === void 0 ? void 0 : _a.hotspotId;
    const idOfNextHotspot = (_b = getStepInfo(annotations, currentStepIndex + 1).step) === null || _b === void 0 ? void 0 : _b.hotspotId;
    const previousHotspotIsAvailable = (_c = (idOfPreviousHotspot !== undefined && availableHotspots[idOfPreviousHotspot])) !== null && _c !== void 0 ? _c : false;
    const nextHotspotIsAvailable = (_d = (idOfNextHotspot !== undefined && availableHotspots[idOfNextHotspot])) !== null && _d !== void 0 ? _d : false;
    const getContentForId = useCallback((id, direction) => {
        if (currentTutorial === null || currentTutorial === void 0 ? void 0 : currentTutorial.completed) {
            return null;
        }
        const globalStepIndex = id2index[id];
        if (globalStepIndex === undefined) {
            // This hotspot is not used in the current tutorial.
            return null;
        }
        if (!task || !step || !open || id !== currentId) {
            const { task: currentTask, localIndex: currentStepIndex } = getStepInfo(annotations, globalStepIndex);
            return (React.createElement(ClosedAnnotation, { globalStepIndex: globalStepIndex, i18nStrings: i18nStrings, onOpen: onOpen, focusOnRender: id === currentId, totalLocalSteps: currentTask ? currentTask.steps.length : 0, taskLocalStepIndex: currentStepIndex }));
        }
        return (React.createElement(OpenAnnotation, { i18nStrings: i18nStrings, direction: direction, title: i18nStrings.taskTitle(taskIndex, task.title), content: step.content, alert: step.warningAlert, showPreviousButton: currentStepIndex !== 0, showFinishButton: currentStepIndex + 1 === totalStepCount, taskLocalStepIndex: localIndex, totalLocalSteps: task.steps.length, nextButtonEnabled: nextHotspotIsAvailable, onNextButtonClick: openNextStep, onFinish: onFinish, previousButtonEnabled: previousHotspotIsAvailable, onPreviousButtonClick: openPreviousStep, onDismiss: onDismiss }));
    }, [
        id2index,
        currentTutorial,
        task,
        step,
        open,
        currentId,
        currentStepIndex,
        i18nStrings,
        taskIndex,
        localIndex,
        totalStepCount,
        nextHotspotIsAvailable,
        openNextStep,
        onFinish,
        previousHotspotIsAvailable,
        openPreviousStep,
        onDismiss,
        onOpen,
        annotations,
    ]);
    const registerHotspot = useCallback((id) => {
        if (!id2index || id2index[id] === undefined) {
            // This hotspot is not used in the current tutorial.
            return;
        }
        /*
          To ensure that all hotspots are immediately known to all triggered useEffects, we
          need to update the availableHotspotsRef BEFORE the setAvailableHotspots calls, since
          they will be batched and delayed until after the useEffects are run.
        */
        availableHotspotsRef.current = Object.assign(Object.assign({}, availableHotspotsRef.current), { [id]: true });
        setAvailableHotspots(availableHotspots => {
            if (availableHotspots[id]) {
                return availableHotspots;
            }
            return Object.assign(Object.assign({}, availableHotspots), { [id]: true });
        });
    }, 
    // We need to react on id2index changes for registering new hotspots when the map changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id2index]);
    const unregisterHotspot = useCallback((id) => {
        if (!availableHotspotsRef.current[id]) {
            // Prevents unnecessary re-renders.
            return;
        }
        /*
          To ensure that all hotspots are immediately known to all triggered useEffects, we
          need to update the availableHotspotsRef BEFORE the setAvailableHotspots calls, since
          they will be batched and delayed until after the useEffects are run.
        */
        availableHotspotsRef.current = removeKey(id, availableHotspotsRef.current);
        setAvailableHotspots(availableHotspots => {
            if (!availableHotspots[id]) {
                return availableHotspots;
            }
            return removeKey(id, availableHotspots);
        });
    }, []);
    const context = {
        getContentForId,
        registerHotspot,
        unregisterHotspot,
        onStartTutorial,
        onExitTutorial,
        currentStepIndex,
        currentTutorial,
    };
    return React.createElement(hotspotContext.Provider, { value: context }, children);
}
applyDisplayName(AnnotationContext, 'AnnotationContext');
function removeKey(key, object) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = object, _b = key, _ = _a[_b], remainingObject = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return remainingObject;
}
//# sourceMappingURL=index.js.map