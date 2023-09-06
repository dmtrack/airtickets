import { useAppDispatch, useAppSelector } from '../hook/redux';
// import { setInbox, setOutbox } from '../store/actions/ticketsActions';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();
    // const selectInbox = () => {
    //     dispatch(setInbox(''));
    // };
    // const selectOutbox = () => {
    //     dispatch(setOutbox(username));
    // };
    return (
        <>
            {' '}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonGroup
                    variant='outlined'
                    aria-label='outlined primary button group'>
                    <Button>Inbox</Button>
                    <Button>Outbox</Button>
                </ButtonGroup>{' '}
            </Box>
        </>
    );
};

export default SearchPanel;
