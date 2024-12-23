import {Box, Grid2, IconButton, InputBase, styled, Theme} from '@mui/material';
import {tokens} from '../../theme';

export const StyledIconButton = styled(IconButton)(({theme}: { theme: Theme }) => ({
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

export const StyledRootBox = styled(Box)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 32px',
        backgroundColor: colors.primary.DEFAULT,
        maxHeight: '95px',
        borderBottom: `1px solid ${colors.borderColor}`
    };
});

export const StyledTopBarIcons = styled(Grid2)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '35px',
        borderRight: `1px solid ${colors.borderColor}`
    };
});

export const StyledSearchBlock = styled(Grid2)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        backgroundColor: `${colors.primary[600]}`,
        borderRadius: '8px',
        marginLeft: '28px',
    };
});

export const StyledInputBase = styled(InputBase)(({theme}: { theme: Theme }) => ({
    padding: '10px 15px',
    color: theme.palette.text.primary,
}));

export const StyledTopBarBox = styled(Box)(({theme}: { theme: Theme }) => ({display: 'flex'}));