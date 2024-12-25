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

export const StyledListItemButton = styled(ListItemButton,
        {shouldForwardProp: (prop) => !['active', 'path'].includes(prop as string)})<{
    active?: string;
    path?: string;
}>(({theme, active, path}) => {
    const colors = tokens(theme.palette.mode);
    return {
        backgroundColor: path && active === path ? '#1900D5' : '',
        color: path && active === path ? `${colors.white.DEFAULT}` : '',
        borderRadius: '10px',
        '& .MuiSvgIcon-root': {
            color: path && active === path ? `${colors.white.DEFAULT}` : `${colors.secondary.DEFAULT}`,
        },
        '&:hover': {
            backgroundColor: '#1900D5',
            borderRadius: '10px',
            color: `${colors.white.DEFAULT}`,
            '& .MuiSvgIcon-root': {
                color:  `${colors.white.DEFAULT}`,
            }
        }
    };
});




