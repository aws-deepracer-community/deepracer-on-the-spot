import { getTestOptionIndexes } from '../../internal/components/options-list/utils/test-indexes';
export const getItemProps = ({ option, index, getOptionProps, filteringValue, checkboxes = false }) => {
    const optionProps = getOptionProps(option, index);
    optionProps.filteringValue = filteringValue;
    const { inGroupIndex, groupIndex, throughIndex } = getTestOptionIndexes(option) || {};
    return Object.assign(Object.assign({}, optionProps), { hasCheckbox: checkboxes, ['data-group-index']: groupIndex, ['data-child-index']: inGroupIndex, ['data-test-index']: throughIndex });
};
//# sourceMappingURL=get-item-props.js.map