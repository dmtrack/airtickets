import { Checkbox as MUICheckbox } from '@mui/material';

interface ICheckBoxProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const Checkbox = ({ checked, onChange, name }: ICheckBoxProps) => {
    return (
        <MUICheckbox
            name={name}
            color='primary'
            checked={checked}
            onChange={onChange}
            sx={{
                height: '35px',
                boxSizing: 'border-box', // <-- add this
            }}
        />
    );
};

export default Checkbox;
