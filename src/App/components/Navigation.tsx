import { Link } from 'react-router-dom';
import { useAppSelector } from '../hook/redux';

export function Navigation() {
    const { isAuth } = useAppSelector((state) => state.auth);

    return (
        <nav className="flex px-5 h-[50px] justify-between opacity-70 items-center ">
            {isAuth && <Link to="/logout">logout</Link>}
        </nav>
    );
}
