export function getSortedOptions({ options, contentDisplay, }) {
    const optionsById = options.reduce((currentValue, option) => (Object.assign(Object.assign({}, currentValue), { [option.id]: option })), {});
    return contentDisplay
        .map(({ id, visible }) => (Object.assign(Object.assign({}, optionsById[id]), { visible })))
        .filter(Boolean);
}
//# sourceMappingURL=utils.js.map