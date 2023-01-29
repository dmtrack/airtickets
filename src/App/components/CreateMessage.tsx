import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState } from 'react';
import { IUser } from '../interfaces/IUsers';
import { fetchUsers } from '../store/actions/user.actions';
import { ICreateMessageProps } from '../interfaces/IMessage';
import { InputAdornment } from '@mui/material';

const CreateMessage: React.FC<ICreateMessageProps> = ({
    setText,
    setTitle,
    setRecepient,
    recepient,
}: ICreateMessageProps) => {
    const [users, setUsers] = useState([]);
    const userNames = users.map((user: IUser) => user.username);
    useEffect(() => {
        fetchUsers().then((data) => setUsers(data.data));
    }, []);
    const [value, setSelectedValue] = useState<string | null>('');

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
                    disablePortal
                    options={userNames}
                    value={recepient}
                    onChange={(_, newValue) => setSelectedValue}
                    inputValue={recepient}
                    onInputChange={(_, newInputValue) =>
                        setRecepient(newInputValue)
                    }
                    renderInput={(params) => {
                        params.InputProps.startAdornment = (
                            <InputAdornment position="start"></InputAdornment>
                        );
                        return <TextField {...params} label="Recepient" />;
                    }}
                    getOptionLabel={(option) => option}
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
                    maxRows={11}
                    minRows={11}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </Stack>
        </>
    );
};
export default CreateMessage;
