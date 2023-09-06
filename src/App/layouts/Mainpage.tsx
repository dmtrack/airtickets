import { useAppDispatch, useAppSelector } from '../hook/redux';
import { TicketsPage } from './ChatPage';

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className='container mx-auto  pt-5'>
                <TicketsPage />
            </div>
        </>
    );
};

export default MainPage;
