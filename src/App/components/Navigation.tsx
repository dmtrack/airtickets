import { Link } from 'react-router-dom';
import { useAppSelector } from '../hook/redux';

const Navigation: React.FC = () => {
    const { isAuth } = useAppSelector((state) => state.auth);

    return (
        <nav className="flex px-5 h-[50px] opacity-70 items-center justify-end">
            {isAuth && <Link to="/logout">logout</Link>}
        </nav>
    );
};

export default Navigation;
