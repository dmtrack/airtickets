import { StateFromReducersMapObject } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hook/redux';

import { IMessage } from '../interfaces/IMessage';
import { logOut } from '../store/actions/auth.actions';
import { messageSlice } from '../store/slices/message.slice';
import Button from './button';
import { Message } from './Message';

interface IMessagesListProps {
    messages: IMessage[];
}
const URL = process.env.REACT_APP_BASE_URL;

const MessagesList = (messagesProps: IMessagesListProps) => {
    const { messages } = useAppSelector((state) => state.messages);
    const { userId } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();

    // function handleChange(): void {
    //     setChecked((prevState) => !prevState);
    //     if (dataId.length !== messages.length) {
    //         const idCollection: number[] = [];
    //         messages.forEach((u: IMessage) => {
    //             idCollection.push(u.id);
    //         });
    //         setDataId(idCollection);
    //     } else setDataId([]);
    // }

    return <></>;
};

export { MessagesList };
