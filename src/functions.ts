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
export const setAdminLocalStorage = (userAdmin) => {
    localStorage.setItem('UserAdmin', JSON.stringify(userAdmin));
};
export const getAdminLocalStorage = () => {
    return localStorage.getItem('UserAdmin');
};
export const setHomeLocalStorage = (userHome) => {
    localStorage.setItem('UserHome', JSON.stringify(userHome));
};
export const getHomeLocalStorage = () => {
    return JSON.parse(localStorage.getItem('UserHome') as string);
};
