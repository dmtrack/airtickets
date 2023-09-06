import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { TicketsPage } from './TicketsPage';

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className='mx-auto bg-[rgba(244,246,249)]'>
                <Header />
                <TicketsPage />
            </div>
        </>
    );
};

export default MainPage;
