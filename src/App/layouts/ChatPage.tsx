import React, { useEffect } from 'react';
import ControlPanel from '../components/Controlpanel';
import MessagesList from '../components/Messageslist';
import NewMessagePanel from '../components/Newmessagepanel';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { ICreateMessage } from '../interfaces/IMessage';
import { createStateMessage, setInbox } from '../store/actions/messageActions';
import socket from '../utils/socket';

export const ChatPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { username } = useAppSelector((state) => state.auth);
    const { loading, error } = useAppSelector((state) => state.messages);

    const sendMessage = (message: ICreateMessage) => {
        socket.emit('MESSAGE:CREATED', message);
    };
    useEffect(() => {
        dispatch(setInbox(username));
    }, []);

    useEffect(() => {
        socket.on('MESSAGE:DELIVERED', (message) => {
            dispatch(createStateMessage(message));
            console.log(message);
        });
    }, []);

    return (
        <>
            <div>
                {loading && <p className="text-center text-lg">Loading...</p>}
                {error && (
                    <p className="pt-10 text-center text-lg text-red-500">
                        {error}
                    </p>
                )}
                <div className="container mx-auto">
                    <div className="relative overflow-x-auto ">
                        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <div className="flex h-500px overflow-y-auto justify-center">
                                <div className="flex-row">
                                    {' '}
                                    <ControlPanel />
                                    <MessagesList />
                                </div>
                                <div className="w-2"></div>

                                <div className="flex-row">
                                    <NewMessagePanel
                                        sendMessage={sendMessage}
                                    />
                                </div>
                                <div className="w-4"></div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// const ws = new WebSocket('ws://localhost:8000');
// ws.onopen = () => {
//     const message = {
//         event: 'connection',
//         username: username,
//     };
//     ws.send(JSON.stringify(message));
//     console.log('connection opened');

//     // dispatch(fetchMessages(username));
// };

// useEffect(() => {

//     // dispatch(fetchMessages(username));
// }, []);

// useEffect(() => {
// ws.addEventListener('message', (e) => {
// console.log(e.data);
// dispatch(createStateMessage(JSON.parse(e.data)));
// console.log('message received');
// });
// }, []);
