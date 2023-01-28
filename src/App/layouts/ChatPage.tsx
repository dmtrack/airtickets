import React, { useEffect } from 'react';
import ControlPanel from '../components/Controlpanel';
import MessagesList from '../components/Messageslist';
import NewMessagePanel from '../components/Newmessageanel';
import RecepientSelect from '../components/UI/Recepientselect';
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
                {error && (
                    <p className="pt-10 text-center text-lg text-red-500">
                        {error}
                    </p>
                )}
                <div className="container mx-auto">
                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-5">
                                        LeftSide
                                    </th>
                                    <th scope="col" className="w-10">
                                        RightSide
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>
                                    {' '}
                                    <ControlPanel />
                                    <MessagesList messages={messages} />
                                </td>
                                <td>
                                    {' '}
                                    <RecepientSelect />
                                    <NewMessagePanel />
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
