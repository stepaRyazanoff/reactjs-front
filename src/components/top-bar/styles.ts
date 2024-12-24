import {
    AppBar,
    Box,
    Grid2,
    IconButton,
    styled,
    Toolbar,
    InputBase,
    Theme
} from '@mui/material';
import {tokens} from '../../theme';
import {MenuOutlined} from '@mui/icons-material';

export const StyledAppBar = styled(AppBar)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        position: 'static',
        background: `${colors.primary.DEFAULT}`,
        borderBottom: `1px solid ${colors.borderColor}`,
        boxShadow: 'none',
    };
});

export const StyledToolbar = styled(Toolbar)(() => ({
    justifyContent: 'space-between',
    padding: '25px 0',
}));

export const StyledMenuIcon = styled(MenuOutlined)(() => ({
    cursor: 'pointer',
    marginRight: '20px',
}));

export const StyledTopBarBox = styled(Box)(() => ({display: 'flex'}));

export const StyledTopBarIcons = styled(Grid2)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '35px',
        borderRight: `1px solid ${colors.borderColor}`
    };
});

export const StyledIconButton = styled(IconButton)(() => ({
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

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
    color: `${theme.palette.text.primary}`,
}));

