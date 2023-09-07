export const dateFormat = (date: string) => {
    const date_stamp = new Date(date)
        .toLocaleDateString('ru-RU', {
            dateStyle: 'full',
        })
        .split(',');
    const weekday = date_stamp[0].slice(0, 2);
    const dateContainer = date_stamp[1].split(' ');
    const day = dateContainer[1];
    const month = dateContainer[2].slice(0, 3);
    const year = dateContainer[3];
    return `${day} ${month} ${year}, ${weekday}`;
};
