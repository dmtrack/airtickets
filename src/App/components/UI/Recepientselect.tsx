import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { ReactEventHandler, useEffect, useState } from 'react';
import { IUser } from '../../interfaces/IUsers';
import { fetchUsers } from '../../store/actions/user.actions';
import { useAppDispatch, useAppSelector } from '../../hook/redux';

const RecepientSelect = (setRecepient: any) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers().then((data) => setUsers(data.data));
    }, []);

    return (
        <Stack spacing={1} sx={{ minWidth: 440, marginTop: '44px' }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={users.map((user: IUser) => user.username)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        onChange={(e) => {
                            setRecepient(e.target.value);
                        }}
                        label="Recepient"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Stack>
    );
};

export default RecepientSelect;
