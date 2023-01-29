import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { IUser } from '../interfaces/IUsers';
import { fetchUsers } from '../store/actions/user.actions';

const CreateMessage = (setTitle: any) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers().then((data) => setUsers(data.data));
    }, []);

    const handleTitleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setTitle(e.target.value);
    };

    return (
        <>
            <Stack spacing={1} sx={{ minWidth: 400, marginTop: '44px', mr: 2 }}>
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={users.map((user: IUser) => user.username)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            // onChange={(e) => {
                            //     setRecepient(e.target.value);
                            // }}
                            label="Recepient"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    onChange={(e) => {
                        handleTitleChange(e);
                    }}
                />
                <TextField
                    id="text"
                    label="Text"
                    multiline
                    maxRows={10}
                    minRows={10}
                    // onChange={(e) => {
                    //     setText(e.target.value);
                    // }}
                />
            </Stack>
        </>
    );
};
export default CreateMessage;
