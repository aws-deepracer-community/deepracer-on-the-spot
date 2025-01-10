export function includes(array, item) {
    return !!array && array.indexOf(item) > -1;
}
export const compareDates = (itemA, itemB) => {
    const timeA = itemA ? new Date(itemA).getTime() : 0;
    const timeB = itemB ? new Date(itemB).getTime() : 0;
    return timeA - timeB;
};
export function getColumnAriaLabel(i18n, i18nStrings, columnName = '') {
    return ({ sorted, descending }) => {
        var _a, _b, _c, _d, _e, _f;
        if (!sorted) {
            return ((_b = i18n('i18nStrings.labelNotSorted', (_a = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelNotSorted) === null || _a === void 0 ? void 0 : _a.call(i18nStrings, columnName), format => format({ columnName }))) !== null && _b !== void 0 ? _b : '');
        }
        if (descending) {
            return ((_d = i18n('i18nStrings.labelSortedDescending', (_c = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelSortedDescending) === null || _c === void 0 ? void 0 : _c.call(i18nStrings, columnName), format => format({ columnName }))) !== null && _d !== void 0 ? _d : '');
        }
        return ((_f = i18n('i18nStrings.labelSortedAscending', (_e = i18nStrings === null || i18nStrings === void 0 ? void 0 : i18nStrings.labelSortedAscending) === null || _e === void 0 ? void 0 : _e.call(i18nStrings, columnName), format => format({ columnName }))) !== null && _f !== void 0 ? _f : '');
    };
}
//# sourceMappingURL=table-utils.js.map