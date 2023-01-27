import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import { useInput } from '../hook/input';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { login } from '../store/actions/auth.actions';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const username = useInput('');
    const dispatch = useAppDispatch();

    const isFormValid = () => username.value;

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (isFormValid()) {
            console.log(username.value);

            dispatch(
                login({
                    username: username.value,
                })
            )
                .then(() => navigate('/'))
                .catch((e) => console.log(e.message));
        } else alert('Please, fill up all fields');
    };

    return (
        <form
            className="container pt-10 mt-40
             text-sm text-left text-gray-500 dark:text-gray-400 mx-auto max-w-[300px]"
            onSubmit={submitHandler}
        >
            <div className="">
                <label className="block" htmlFor="username">
                    username
                </label>
                <input
                    className="border py-1 px-2 w-full  text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    type="text"
                    {...username}
                    id="username"
                />

                <div className="py-4">
                    <Button
                        onClick={() => submitHandler}
                        variant="info"
                        size="sm"
                        type="submit"
                    >
                        Enter
                    </Button>
                </div>
            </div>
        </form>
    );
};

export { LoginPage };
