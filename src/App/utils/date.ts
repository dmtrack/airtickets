export const dateFormat = (date: string) => {
    const arrayToWork = date.split('.');
    const dateToWork = `${arrayToWork[1]}.${arrayToWork[0]}.${arrayToWork[2]}`;
    const date_stamp = new Date(dateToWork)
        .toLocaleDateString('ru-RU', {
            dateStyle: 'full',
        })
        .split(',');
    const weekday = date_stamp[0].slice(0, 3);
    const dateContainer = date_stamp[1].split(' ');
    const day = dateContainer[1];
    const month = dateContainer[2].slice(0, 3);
    const year = dateContainer[3];
    return `${day} ${month} ${year}, ${weekday}`;
};
