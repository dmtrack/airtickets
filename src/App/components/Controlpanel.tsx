import { useAppDispatch, useAppSelector } from '../hook/redux';
import { setInbox, setOutbox } from '../store/actions/messageActions';
import localStorageService from '../utils/localStorage';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ControlPanel: React.FC = () => {
    const dispatch = useAppDispatch();
    const username = localStorageService.getUserName();
    const selectInbox = () => {
        dispatch(setInbox(username));
    };
    const selectOutbox = () => {
        dispatch(setOutbox(username));
    };
    return (
        <>
            {' '}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined primary button group"
                >
                    <Button onClick={selectInbox}>Inbox</Button>
                    <Button onClick={selectOutbox}>Outbox</Button>
                </ButtonGroup>{' '}
            </Box>
        </>
    );
};

export default ControlPanel;
