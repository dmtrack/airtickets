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

    const [recepient, setRecepient] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleClear = (event: any) => {
        setRecepient('');
        setText('');
        setTitle('');
    };

    const isFormValid = (): string => recepient && title && text;
    const submitSending = (event: React.FormEvent) => {
        if (isFormValid()) {
            event.preventDefault();
            sendMessage({
                author: username,
                recepient: recepient,
                title: title,
                text: text,
                timestamp: Math.floor(Date.now() / 1000),
            });
            handleClear(event);
        } else alert('fillup all fields');
    };

    return (
        <form className="flex-wrap ">
            <CreateMessage
                setTitle={setTitle}
                title={title}
                setText={setText}
                text={text}
                setRecepient={setRecepient}
                recepient={recepient}
            />
            <div className="text-end">
                <button onClick={submitSending}>
                    <SendIcon sx={{ fontSize: 40, mr: '15px' }} />
                </button>
            </div>
        </form>
    );
};

export default NewMessagePanel;
