import { findUpUntil } from '../../internal/utils/dom';
import selectionStyles from './styles.css.js';
import { SELECTION_ITEM } from './utils';
// The hooks moves focus between multi-selection checkboxes.
// Not eligible for tables with grid navigation.
export function useSelectionFocusMove(selectionType, totalItems) {
    if (selectionType !== 'multi') {
        return {};
    }
    function moveFocus(sourceElement, fromIndex, direction) {
        let index = fromIndex;
        const rootContainer = findRootContainer(sourceElement);
        while (index >= -1 && index < totalItems) {
            index += direction;
            const control = findSelectionControlByIndex(rootContainer, index);
            if (control && !control.disabled) {
                control.focus();
                break;
            }
        }
    }
    const [moveFocusDown, moveFocusUp] = [1, -1].map(direction => {
        return (event) => {
            const target = event.currentTarget;
            const itemNode = findUpUntil(target, node => node.dataset.selectionItem === 'item');
            const fromIndex = Array.prototype.indexOf.call(itemNode.parentElement.children, itemNode);
            moveFocus(target, fromIndex, direction);
        };
    });
    return {
        moveFocusDown,
        moveFocusUp,
        moveFocus,
    };
}
function findSelectionControlByIndex(rootContainer, index) {
    if (index === -1) {
        // find "select all" checkbox
        return rootContainer.querySelector(`[data-${SELECTION_ITEM}="all"] .${selectionStyles.root} input`);
    }
    return rootContainer.querySelectorAll(`[data-${SELECTION_ITEM}="item"] .${selectionStyles.root} input`)[index];
}
function findRootContainer(element) {
    return findUpUntil(element, node => node.dataset.selectionRoot === 'true');
}
//# sourceMappingURL=use-selection-focus-move.js.map