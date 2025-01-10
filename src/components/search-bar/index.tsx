import React from 'react';
import {Autocomplete, Stack, TextField} from '@mui/material';
import {ISingleAsset} from '../../common/types';
import {useAppSelector} from '../../utils/hooks';

export const SearchBar = () => {
    const assets: ISingleAsset[] = useAppSelector((state) => state.assets.assets);
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
                />
            </Stack>
    );
};

