import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useInput } from '../hook/input';
import { useAppDispatch } from '../hook/redux';
import { login } from '../store/actions/auth.actions';
import { fetchMessages } from '../store/actions/messageActions';
import socket from '../utils/socket';
import TextField from '@mui/material/TextField';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const username = useInput('');
    const dispatch = useAppDispatch();

    const isFormValid = (): string => username.value;
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (isFormValid()) {
            dispatch(
                login({
                    username: username.value,
                })
            )
                .then(() => navigate('/main'))
                .catch((e) => console.log(e.message));
            socket.emit('USER:JOIN', username);
        } else alert('Please, fill up all fields');
        socket.on('MESSAGES:RECEIVED', (messages) => {
            dispatch(fetchMessages(messages, username.value));
        });
    };

    useEffect(() => {
        return () => {
            socket.removeAllListeners();
        };
    }, []);

    return (
        <form
            className="container pt-10 mt-60
             text-sm text-left text-gray-500 dark:text-gray-400 mx-auto max-w-[300px]"
            onSubmit={submitHandler}
        >
            <div className="flex">
                <TextField
                    sx={{ width: '300px', margin: 2 }}
                    {...username}
                    id="outlined-basic"
                    label="username"
                    variant="outlined"
                />

                <div className="py-6">
                    <Button
                        variant="outlined"
                        onClick={() => submitHandler}
                        type="submit"
                    >
                        Enter
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default LoginPage;
