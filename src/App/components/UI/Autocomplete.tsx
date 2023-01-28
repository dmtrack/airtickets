import TextField from '@mui/material/TextField';
import { IUser } from '../../interfaces/IUsers';

export const Autocomplete = (options: any, setRecepient: any) => {
    return (
        <>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={options.map((option: any) => option.username)}
                renderInput={(params: any) => (
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
        </>
    );
};
