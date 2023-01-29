import { ILoginData } from '../interfaces/IAuth';

export function connect(username: string) {
    const ws = new WebSocket('ws://localhost:8000');

    ws.onopen = () => {
        const message = {
            event: 'connection',
            username: username,
        };
        ws.send(JSON.stringify(message));

        console.log('onopen');
    };
    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);
    };
    ws.onclose = () => {
        console.log('Socket закрыт');
    };
    ws.onerror = () => {
        console.log('Socket произошла ошибка');
    };
}
