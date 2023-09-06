// import { setInbox, setOutbox } from '../store/actions/ticketsActions';

import { Box } from '@mui/material';
import logo from '../assets/plane.webp';

const Header: React.FC = () => {
    return (
        <>
            {' '}
            <Box className=' w-full h-[180px] justify-center content-center flex'>
                <img
                    className='h-[60px] w-[60px] rounded-full object-cover object-center self-center'
                    src={logo}
                    alt='logo image'
                />
            </Box>
        </>
    );
};

export default Header;
