import React from 'react';
import {Autocomplete, Stack, TextField} from '@mui/material';
import {ISingleAsset} from '../../common/types';
import {useAppSelector} from '../../utils/hooks';
import {useNavigate} from 'react-router-dom';

export const SearchBar = () => {
    const navigate = useNavigate();
    const assets: ISingleAsset[] = useAppSelector((state) => state.assets.assets);

    const handleChange = (e: React.SyntheticEvent, value: string | null) => {
        if(value) {
            navigate(`/single/${value}`);
        }
    };

    return (
            <Stack spacing={2} sx={{width: 300}}>
                <Autocomplete
                        freeSolo
                        renderInput={(element) => (
                                <TextField
                                        {...element}
                                        label='Поиск'
                                        slotProps={{
                                            htmlInput: {
                                                ...element.inputProps,
                                                type: 'search'
                                            }
                                        }}
                                />
                        )}
                        options={assets.map((a) => a.name)}
                        onChange={handleChange}
                />
            </Stack>
    );
};

