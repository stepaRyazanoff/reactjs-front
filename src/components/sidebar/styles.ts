import {Box, ListItemButton, styled} from '@mui/material';
import {tokens} from '../../theme';

export const StyledBox = styled(Box)(() => ({
    '&': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '30px',
        cursor: 'pointer'
    }
}));

export const StyledListItemButton = styled(ListItemButton)(({theme}) => {
    const colors = tokens(theme.palette.mode);

    return {
        '&:hover': {
            backgroundColor: '#1900D5 !important',
            borderRadius: '4px',
            color: colors.white.DEFAULT
        }
    };
});