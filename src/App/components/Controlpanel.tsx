import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import Card from '@mui/material/Card';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { setInbox, setOutbox } from '../store/actions/messageActions';
import localStorageService from '../utils/localStorage';

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
        <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={selectInbox}>
                <ArchiveIcon fontSize={'large'} sx={{ marginLeft: '5px' }} />
            </button>
            <button onClick={selectOutbox}>
                <UnarchiveIcon fontSize={'large'} sx={{ marginLeft: '5px' }} />
            </button>
        </Card>
    );
};

export default ControlPanel;
