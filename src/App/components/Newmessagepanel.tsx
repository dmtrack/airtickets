import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import RecepientSelect from './UI/Recepientselect';
import { ReactEventHandler, useEffect, useState } from 'react';
import { fetchUsers } from '../store/actions/user.actions';
import Autocomplete from '@mui/material/Autocomplete';
import { createSocketMessage } from '../store/actions/messageActions';
import CreateMessage from './UI/CreateMessage';

const NewMessagePanel: React.FC = () => {
    const { username } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const [recepient, setRecepient] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const isFormValid = (): string => recepient && title && text;
    const submitSending = (event: ReactEventHandler<HTMLButtonElement>) => {
        if (isFormValid()) {
            dispatch(
                createSocketMessage({
                    author: 'ivan',
                    recepient: 'dmtrack',
                    title: 'fifthmessage',
                    text: 'Hello world!',
                    timestamp: Date.now(),
                })
            ).catch((e: Error) => console.log(e.message));
        } else alert('Please, fill up all fields');
    };

    return (
        <>
            <RecepientSelect setRecepient={setRecepient} />
            <CreateMessage setTitle={setTitle} setText={setText} />
        </>
    );
};

export default NewMessagePanel;
