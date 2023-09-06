interface IFilterObject {
    [key: string]: boolean;
}

export const useTransformedFilter = (DNC: IFilterObject) => {
    const filter: string[] = Object.entries(DNC)
        .map((el) => {
            if (el[1] === true && el[0] !== 'all') {
                return el[0];
            } else return '';
        })
        .filter((el) => el !== '');

    return filter.map((el) => {
        switch (el) {
            case 'notransfer': {
                return 0;
            }
            case 'onetransfer': {
                return 1;
            }
            case 'twotransfers': {
                return 2;
            }
            case 'threetransfers': {
                return 3;
            }
            default:
                return 999;
        }
    });
};
