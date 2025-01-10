export const isItemGroup = (item) => item && item.items !== undefined;
export const isLinkItem = (item) => item && item.href !== undefined;
export const getItemTarget = (item) => (item.external ? '_blank' : undefined);
export function indexIncludes(source, target) {
    for (let index = 0; index < source.length; index++) {
        if (source[index] !== target[index]) {
            return false;
        }
    }
    return true;
}
export function indexEquals(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    for (let index = 0; index < left.length; index++) {
        if (left[index] !== right[index]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map