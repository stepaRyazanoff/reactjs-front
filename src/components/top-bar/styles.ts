import {
    AppBar,
    styled,
    Toolbar,
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


