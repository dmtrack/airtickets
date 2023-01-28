import { Link } from 'react-router-dom';
import { useAppSelector } from '../hook/redux';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation: React.FC = () => {
    const { isAuth } = useAppSelector((state) => state.auth);
    const { username } = useAppSelector((state) => state.auth);

    return (
        <nav className="flex px-5 h-[50px] opacity-70 items-center justify-end">
            {isAuth && (
                <div>
                    <Link
                        to="/logout"
                        className="text-sm  text-gray-500 dark:text-gray-400"
                    >
                        {username}
                        <LogoutIcon />
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
