export const customModifier = (baseModifier: string, ...modifier: string[]) => {
    if (modifier) {
        return modifier
            .reduce((total: string[], item: string) => {
                return [baseModifier + '-' + item, ...total];
            }, [])
            .reduce((toal, item) => {
                return toal + ' ' + item;
            }, baseModifier);
    }
    return baseModifier;
};
