interface IDateResponse {
    day: number;
    month: number;
    year: number;
}

export const getDate = (): IDateResponse => {
    const date = new Date();
    const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
    ];
    return { day: day, month: month, year: year };
};
