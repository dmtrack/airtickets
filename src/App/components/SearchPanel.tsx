import { useAppDispatch, useAppSelector } from '../hook/redux';
// import { setInbox, setOutbox } from '../store/actions/ticketsActions';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CheckboxGroup } from './UI/CheckBoxGroup';

const SearchPanel: React.FC = () => {
    return (
        <>
            {' '}
            <Box className=' w-[300px] h-1/3  shadow-md rounded-md bg-white font-sans'>
                <Box className=' h-100 p-5'>
                    <div className='pb-4 font-bold tracking-normal text-gray-500'>
                        ВАЛЮТА
                    </div>
                    <Box
                        className='w-full'
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                        }}>
                        <ButtonGroup
                            size='large'
                            variant='outlined'
                            aria-label='outlined primary button group'>
                            <Button>RUB</Button>
                            <Button>USD</Button> <Button>EUR</Button>
                        </ButtonGroup>{' '}
                    </Box>
                    <Box className='pt-8 '>
                        <div className='pb-4 font-bold tracking-normal text-gray-500'>
                            КОЛИЧЕСТВО ПЕРЕСАДОК
                        </div>
                        <CheckboxGroup />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default SearchPanel;
