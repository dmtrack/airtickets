import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hook/redux';
import { ChatPage } from './ChatPage';

export function MainPage() {
    const { isAuth } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [isAuth]);

    return (
        <>
            {isAuth ? (
                <div className="container mx-auto  pt-5">
                    <ChatPage />
                </div>
            ) : (
                navigate('/login')
            )}
        </>
    );
}
