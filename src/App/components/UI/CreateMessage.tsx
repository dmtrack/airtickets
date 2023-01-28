import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateMessage = (setText: any, setTitle: any) => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { mt: 2, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                />
                <TextField
                    id="text"
                    label="Text"
                    multiline
                    maxRows={7}
                    minRows={7}
                />
            </div>
        </Box>
    );
};

export default CreateMessage;
