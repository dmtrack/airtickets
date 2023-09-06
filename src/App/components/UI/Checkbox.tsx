import { makeStyles } from '@mui/styles';
import { Checkbox as MUICheckbox } from '@mui/material';

const useStyles = makeStyles({
    input: {
        height: '20px',
        boxSizing: 'border-box', // <-- add this
    },
});

const Checkbox = () => {
    const classes = useStyles();
    return <MUICheckbox color='primary' classes={{ root: classes.input }} />;
};

export default Checkbox;
