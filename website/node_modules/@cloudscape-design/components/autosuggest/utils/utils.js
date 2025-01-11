const isGroup = (option) => 'type' in option && option.type === 'parent';
const popLastGroup = (options) => {
    if (options.length) {
        const lastOption = options[options.length - 1];
        if (isGroup(lastOption)) {
            options.pop();
        }
    }
};
export const filterOptions = (options, text) => {
    const filteredOptions = options.reduce((filteredIn, option) => {
        if (isGroup(option)) {
            popLastGroup(filteredIn);
            filteredIn.push(option);
        }
        else if (matchSingleOption(option, text)) {
            filteredIn.push(option);
        }
        return filteredIn;
    }, []);
    popLastGroup(filteredOptions);
    return filteredOptions;
};
const matchSingleOption = (option, text) => {
    const searchableFields = ['value', 'label', 'description', 'labelTag'];
    const searchableTagFields = ['tags', 'filteringTags'];
    const searchText = text.toLowerCase();
    const searchStrFieldsFn = (attr) => matchString(option[attr], searchText);
    const searchTagsFieldsFn = (attr) => { var _a; return (_a = option[attr]) === null || _a === void 0 ? void 0 : _a.some(value => matchString(value, searchText)); };
    return searchableFields.some(searchStrFieldsFn) || searchableTagFields.some(searchTagsFieldsFn);
};
const matchString = (value, searchText) => {
    return value && value.toLowerCase().indexOf(searchText) !== -1;
};
//# sourceMappingURL=utils.js.map