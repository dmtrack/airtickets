import React, { useEffect } from 'react';
import { MessagesList } from '../components/Messageslist';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { fetchMessages } from '../store/actions/messageActions';

export const ChatPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { username } = useAppSelector((state) => state.auth);
    const { messages, loading, error } = useAppSelector(
        (state) => state.messages
    );
    useEffect(() => {
        dispatch(fetchMessages(username));
    }, []);
    return (
        <>
            <div>
                {loading && <p className="text-center text-lg">Loading...</p>}

                <MessagesList messages={messages} />
                {error && (
                    <p className="pt-10 text-center text-lg text-red-500">
                        {error}
                    </p>
                )}
            </div>
        </>
    );
};
