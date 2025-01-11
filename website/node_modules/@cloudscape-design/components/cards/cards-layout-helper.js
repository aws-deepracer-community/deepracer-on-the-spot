const WIDTHS = [1920, 1400, 1200, 992, 768];
// Transform the array of widths into a valid cardsPerRow property that is used as default
const defaultCardsPerRow = WIDTHS.map((value, index, widths) => ({
    minWidth: value,
    cards: widths.length + 1 - index,
}));
export const getCardsPerRow = (width, config) => {
    if (config.length === 0) {
        config = defaultCardsPerRow;
    }
    let cardsPerRow = 1;
    // sort them by descending order of minWidth
    const sortedConfig = config
        .slice()
        .map(value => ({
        minWidth: value.minWidth || 0,
        cards: value.cards,
    }))
        .sort((a, b) => b.minWidth - a.minWidth);
    sortedConfig.some(layout => {
        if (width >= layout.minWidth) {
            cardsPerRow = layout.cards;
            return true;
        }
    });
    return cardsPerRow;
};
//# sourceMappingURL=cards-layout-helper.js.map