import {Grid2, InputBase, styled, Theme} from '@mui/material';
import {tokens} from '../../theme';

export const StyledSearchBlock = styled(Grid2)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        backgroundColor: `${colors.primary[600]}`,
        borderRadius: '8px',
    };
});

export const StyledInputBase = styled(InputBase)(({theme}: { theme: Theme }) => ({
    padding: '10px 15px',
    color: `${theme.palette.text.primary}`,
}));