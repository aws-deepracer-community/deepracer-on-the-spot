const testIndexMap = new WeakMap();
//retrieves the test indexes of the option for the findOption and findOptionInGroup test-utils
export const getTestOptionIndexes = (item) => testIndexMap.get(item);
export const generateTestIndexes = (filteredItems, getParentGroup) => {
    let throughIndex = 1;
    let groupIndex = 0;
    let inGroupIndex = 1;
    let currentGroup = null;
    filteredItems.forEach(item => {
        const isGroup = item.type === 'parent';
        const group = isGroup ? item : getParentGroup(item);
        if (group && group !== currentGroup) {
            currentGroup = group;
            groupIndex += 1;
            inGroupIndex = 1;
        }
        if (isGroup) {
            testIndexMap.set(item, { groupIndex });
        }
        else if (group && item.type === 'child') {
            testIndexMap.set(item, {
                throughIndex: throughIndex++,
                groupIndex,
                inGroupIndex: inGroupIndex++,
            });
        }
        else if (item.type === 'child' || !item.type) {
            testIndexMap.set(item, { throughIndex: throughIndex++ });
        }
    });
};
//# sourceMappingURL=test-indexes.js.map