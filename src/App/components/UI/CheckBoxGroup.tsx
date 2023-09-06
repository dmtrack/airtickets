import { Box, FormControlLabel, Typography } from '@mui/material';
import React, { useEffect, useCallback } from 'react';
import Checkbox from './Checkbox';
import { setFilterAction } from '../../store/actions/ticketsActions';
import { useAppDispatch } from '../../hook/redux';
import { useTransformedFilter } from '../../hook/useTransformFilter';

export const CheckboxGroup = () => {
    const dispatch = useAppDispatch();

    const [DNC, setDNC] = React.useState({
        all: false,
        notransfer: false,
        onetransfer: false,
        twotransfers: false,
        threetransfers: false,
    });

    const { all, notransfer, onetransfer, twotransfers, threetransfers } = DNC;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'all' && DNC.all === true) {
            console.log('all');
            setDNC({
                all: false,
                notransfer: false,
                onetransfer: false,
                twotransfers: false,
                threetransfers: false,
            });
        } else if (event.target.name === 'all' && DNC.all === false) {
            setDNC({
                all: true,
                notransfer: true,
                onetransfer: true,
                twotransfers: true,
                threetransfers: true,
            });
        } else {
            setDNC({ ...DNC, [event.target.name]: event.target.checked });
        }
    };
    const transformedFilter = useTransformedFilter(DNC);
    useEffect(() => {
        dispatch(setFilterAction(transformedFilter));
    }, [DNC]);

    return (
        <div className='flex flex-col'>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={all}
                        onChange={handleChange}
                        name='all'
                    />
                }
                label={
                    <Box component='div' fontSize={14} fontWeight={300}>
                        Все
                    </Box>
                }
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={notransfer}
                        onChange={handleChange}
                        name='notransfer'
                    />
                }
                label={
                    <Box component='div' fontSize={14} fontWeight={300}>
                        Без пересадок
                    </Box>
                }
            />{' '}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={onetransfer}
                        onChange={handleChange}
                        name='onetransfer'
                    />
                }
                label={
                    <Box component='div' fontSize={14} fontWeight={300}>
                        1 пересадка
                    </Box>
                }
            />{' '}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={twotransfers}
                        onChange={handleChange}
                        name='twotransfers'
                    />
                }
                label={
                    <Box component='div' fontSize={14} fontWeight={300}>
                        2 пересадки
                    </Box>
                }
            />{' '}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={threetransfers}
                        onChange={handleChange}
                        name='threetransfers'
                    />
                }
                label={
                    <Box component='div' fontSize={14} fontWeight={300}>
                        3 пересадки
                    </Box>
                }
            />
        </div>
    );
};
