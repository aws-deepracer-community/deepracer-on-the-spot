// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { useUniqueId } from '../../internal/hooks/use-unique-id';
import styles from '../styles.css.js';
import { getSortedOptions } from './utils';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableOption from './draggable-option';
import useDragAndDropReorder from './use-drag-and-drop-reorder';
import useLiveAnnouncements from './use-live-announcements';
import Portal from '../../internal/components/portal';
import ContentDisplayOption from './content-display-option';
import { useInternalI18n } from '../../i18n/context';
const componentPrefix = 'content-display';
const getClassName = (suffix) => styles[`${componentPrefix}-${suffix}`];
export default function ContentDisplayPreference({ title, description, options, value = options.map(({ id }) => ({
    id,
    visible: true,
})), onChange, liveAnnouncementDndStarted, liveAnnouncementDndItemReordered, liveAnnouncementDndItemCommitted, liveAnnouncementDndDiscarded, dragHandleAriaDescription, dragHandleAriaLabel, }) {
    const idPrefix = useUniqueId(componentPrefix);
    const i18n = useInternalI18n('collection-preferences');
    const onToggle = (option) => {
        onChange(value.map(item => (item.id === option.id ? Object.assign(Object.assign({}, item), { visible: !option.visible }) : item)));
    };
    const titleId = `${idPrefix}-title`;
    const descriptionId = `${idPrefix}-description`;
    const sortedOptions = getSortedOptions({ options, contentDisplay: value });
    const { activeItem, collisionDetection, handleKeyDown, sensors, setActiveItem } = useDragAndDropReorder({
        sortedOptions,
    });
    const activeOption = activeItem ? sortedOptions.find(({ id }) => id === activeItem) : null;
    const announcements = useLiveAnnouncements({
        isDragging: activeItem !== null,
        liveAnnouncementDndStarted: i18n('contentDisplayPreference.liveAnnouncementDndStarted', liveAnnouncementDndStarted, format => (position, total) => format({ position, total })),
        liveAnnouncementDndItemReordered: i18n('contentDisplayPreference.liveAnnouncementDndItemReordered', liveAnnouncementDndItemReordered, format => (initialPosition, currentPosition, total) => format({ currentPosition, total, isInitialPosition: `${initialPosition === currentPosition}` })),
        liveAnnouncementDndItemCommitted: i18n('contentDisplayPreference.liveAnnouncementDndItemCommitted', liveAnnouncementDndItemCommitted, format => (initialPosition, finalPosition, total) => format({ initialPosition, finalPosition, total, isInitialPosition: `${initialPosition === finalPosition}` })),
        liveAnnouncementDndDiscarded: i18n('contentDisplayPreference.liveAnnouncementDndDiscarded', liveAnnouncementDndDiscarded),
        sortedOptions: value,
    });
    const renderedDragHandleAriaDescription = i18n('contentDisplayPreference.dragHandleAriaDescription', dragHandleAriaDescription);
    return (React.createElement("div", { className: styles[componentPrefix] },
        React.createElement("h3", { className: getClassName('title'), id: titleId }, i18n('contentDisplayPreference.title', title)),
        React.createElement("p", { className: getClassName('description'), id: descriptionId }, i18n('contentDisplayPreference.description', description)),
        React.createElement(DndContext, { sensors: sensors, collisionDetection: collisionDetection, accessibility: {
                announcements,
                restoreFocus: false,
                screenReaderInstructions: renderedDragHandleAriaDescription
                    ? { draggable: renderedDragHandleAriaDescription }
                    : undefined,
            }, onDragStart: ({ active }) => setActiveItem(active.id), onDragEnd: event => {
                setActiveItem(null);
                const { active, over } = event;
                if (over && active.id !== over.id) {
                    const oldIndex = value.findIndex(({ id }) => id === active.id);
                    const newIndex = value.findIndex(({ id }) => id === over.id);
                    onChange(arrayMove([...value], oldIndex, newIndex));
                }
            }, onDragCancel: () => setActiveItem(null) },
            React.createElement("ul", { className: getClassName('option-list'), "aria-describedby": descriptionId, "aria-labelledby": titleId, role: "list" },
                React.createElement(SortableContext, { items: sortedOptions.map(({ id }) => id), strategy: verticalListSortingStrategy }, sortedOptions.map(option => {
                    return (React.createElement(DraggableOption, { dragHandleAriaLabel: i18n('contentDisplayPreference.dragHandleAriaLabel', dragHandleAriaLabel), key: option.id, onKeyDown: handleKeyDown, onToggle: onToggle, option: option }));
                }))),
            React.createElement(Portal, null,
                React.createElement(DragOverlay, { className: styles['drag-overlay'], dropAnimation: null, style: { zIndex: 5000 } }, activeOption && (React.createElement(ContentDisplayOption, { listeners: { onKeyDown: handleKeyDown }, dragHandleAriaLabel: i18n('contentDisplayPreference.dragHandleAriaLabel', dragHandleAriaLabel), onToggle: onToggle, option: activeOption })))))));
}
//# sourceMappingURL=index.js.map