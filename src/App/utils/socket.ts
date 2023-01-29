import io from 'socket.io-client';

const PORT = process.env.REACT_APP_SOCKET;
// const socket = io();
const socket = io(`${PORT}`);

export default socket;
