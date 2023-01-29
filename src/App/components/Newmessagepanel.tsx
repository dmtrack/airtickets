import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { useState } from 'react';
import CreateMessage from './CreateMessage';
import SendIcon from '@mui/icons-material/Send';
import { ISendMessageProps } from '../interfaces/IMessage';

const NewMessagePanel: React.FC<ISendMessageProps> = (
    props: ISendMessageProps
) => {
    const { username } = useAppSelector((state) => state.auth);
    const { sendMessage } = props;
    const dispatch = useAppDispatch();
    const [recepient, setRecepient] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const isFormValid = (): string => recepient && title && text;
    const submitSending = (event: React.FormEvent) => {
        event.preventDefault();
        sendMessage({
            author: 'ivan',
            recepient: 'olga',
            title: '9 message',
            text: 'This is 9!',
            timestamp: Math.floor(Date.now() / 1000),
        });
        // if (isFormValid()) {
        // dispatch(
        //     createSocketMessage({
        //         author: 'ivan',
        //         recepient: 'dmtrack',
        //         title: 'fifthmessage',
        //         text: 'Hello world!',
        //         timestamp: Date.now(),
        //     })
        // ).catch((e: Error) => console.log(e.message));
        // } else alert('Please, fill up all fields');
    };

    return (
        <form className="flex-wrap ">
            <CreateMessage setTitlet={setTitle} />
            <div className="text-center">
                <button onClick={submitSending}>
                    <SendIcon sx={{ fontSize: 40 }} />
                </button>
            </div>
        </form>
    );
};

export default NewMessagePanel;
