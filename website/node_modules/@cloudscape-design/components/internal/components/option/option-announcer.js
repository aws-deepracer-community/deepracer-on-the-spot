function defaultOptionDescription(option, parentGroup) {
    return [
        parentGroup && parentGroup.label,
        option.__labelPrefix,
        option.label || option.value,
        option.description,
        option.labelTag,
    ]
        .concat(option.tags)
        .filter(el => !!el)
        .join(' ');
}
export default defaultOptionDescription;
//# sourceMappingURL=option-announcer.js.map