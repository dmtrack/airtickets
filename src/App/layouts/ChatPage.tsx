import React, { useEffect, useRef } from 'react';
import ControlPanel from '../components/Controlpanel';
import MessagesList from '../components/Messageslist';
import NewMessagePanel from '../components/Newmessagepanel';
import RecepientSelect from '../components/UI/Recepientselect';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { fetchMessages } from '../store/actions/messageActions';
import { connect } from '../utils/wss.connection';
import { IMessage } from '../interfaces/IMessage';

export const ChatPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { username } = useAppSelector((state) => state.auth);
    const { loading, error } = useAppSelector((state) => state.messages);
    const ws = new WebSocket('ws://localhost:8000');
    ws.onopen = () => {
        const message = {
            event: 'connection',
            username: username,
        };
        ws.send(JSON.stringify(message));
        console.log('connection opened');

        // dispatch(fetchMessages(username));
    };

    // useEffect(() => {

    //     // dispatch(fetchMessages(username));
    // }, []);

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            dispatch(fetchMessages(JSON.parse(e.data), username));
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
                            <div className="flex">
                                <div className="w-5"></div>
                                <div className="flex-row ju">
                                    {' '}
                                    <ControlPanel />
                                    <MessagesList />
                                </div>
                                <div className="w-2"></div>
                                <div className="w-10">
                                    <div className="flex-row">
                                        <NewMessagePanel />
                                    </div>
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
