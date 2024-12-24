import {Box, Drawer, ListItemButton, styled, Theme, Typography} from '@mui/material';
import {tokens} from '../../theme';

interface IStyledDrawer {
    drawerWidth: string;
}

export const StyledDrawer = styled(Drawer, {shouldForwardProp: (prop) => prop !== 'drawerWidth'})<IStyledDrawer>
(({theme, drawerWidth}: { theme: Theme, drawerWidth: string; }) => ({
    width: drawerWidth,
    '& .MuiDrawer-paper': {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        boxSizing: 'border-box',
        width: drawerWidth,
    }
}));

export const StyledNavBox = styled(Box)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {borderBottom: `1px solid ${colors.borderColor}`, width: '100%'};
});

export const StyledSidebarHeaderBox = styled(Box)(() => ({
    '&': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '30px',
        cursor: 'pointer'
    }
}));

export const StyledHeaderTypography = styled(Typography)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        color: theme.palette.mode === 'dark'
                ? `${colors.white.DEFAULT}`
                : `${colors.black.DEFAULT}`
    };
});

export const StyledNavList = styled(Box,)(() => ({marginBottom: '55px'}));

export const StyledListItemButton = styled(ListItemButton)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        '&:hover': {
            backgroundColor: '#1900D5 !important',
            borderRadius: '4px',
            color: `${colors.white.DEFAULT}`,
            '& .MuiSvgIcon-root': {
                color: `${colors.white.DEFAULT}`,
            }
        }
    };
});




