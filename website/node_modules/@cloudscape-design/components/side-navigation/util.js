import { warnOnce } from '@cloudscape-design/component-toolkit/internal';
export function hasActiveLink(items, activeHref) {
    for (const item of items) {
        if ((item.type === 'link' || item.type === 'link-group' || item.type === 'expandable-link-group') &&
            item.href === activeHref) {
            return true;
        }
        if ((item.type === 'section' || item.type === 'link-group' || item.type === 'expandable-link-group') &&
            hasActiveLink(item.items, activeHref)) {
            return true;
        }
    }
    return false;
}
export function generateExpandableItemsMapping(items, mapping = new WeakMap(), expandableParents = []) {
    items.forEach(item => {
        const nextLevelParents = expandableParents.slice();
        if (item.type === 'section' || item.type === 'expandable-link-group') {
            mapping.set(item, expandableParents);
            nextLevelParents.unshift(item);
        }
        if (item.type === 'section' || item.type === 'link-group' || item.type === 'expandable-link-group') {
            generateExpandableItemsMapping(item.items, mapping, nextLevelParents);
        }
    });
    return mapping;
}
export function checkDuplicateHrefs(items) {
    const hrefs = new Set();
    const queue = items.slice();
    while (queue.length > 0) {
        // We just checked that there's items in the queue.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const item = queue.shift();
        // Check duplicated hrefs
        if ('href' in item) {
            if (hrefs.has(item.href)) {
                warnOnce('SideNavigation', `duplicate href in "${item.text}": ${item.href}`);
            }
            hrefs.add(item.href);
        }
        if ('items' in item) {
            queue.push(...item.items);
        }
    }
}
//# sourceMappingURL=util.js.map