import { __rest } from "tslib";
export const flattenOptions = (options) => {
    const parentMap = new Map();
    const flatOptions = options.reduce((acc, option) => {
        if ('options' in option) {
            const { options } = option, rest = __rest(option, ["options"]);
            const parentDropdownOption = { type: 'parent', option };
            const allOptionsDisabled = options.every(option => option.disabled);
            if (option.disabled || allOptionsDisabled) {
                parentDropdownOption.disabled = true;
            }
            acc.push(parentDropdownOption);
            options.forEach(child => {
                const childDropdownOption = { type: 'child', option: child };
                if (rest.disabled || child.disabled) {
                    childDropdownOption.disabled = true;
                }
                acc.push(childDropdownOption);
                parentMap.set(childDropdownOption, parentDropdownOption);
            });
        }
        else {
            const dropdownOption = { option };
            if (option.disabled) {
                dropdownOption.disabled = true;
            }
            acc.push(dropdownOption);
        }
        return acc;
    }, []);
    return {
        flatOptions,
        parentMap,
    };
};
//# sourceMappingURL=flatten-options.js.map