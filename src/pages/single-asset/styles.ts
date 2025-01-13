import {Grid2, styled, Theme, Typography} from '@mui/material';
import {tokens} from '../../theme';

interface ISizeProps {
    size: { sm: number; xs: number; };
}

export const StyledPriceTypography = styled(Typography)(() => ({
    marginRight: 10
}));

export const StyledGrid = styled(Grid2)(({theme, size}: { theme: Theme } & ISizeProps) => {
    const colors = tokens(theme.palette.mode);
    return {
        ...size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 16px',
        backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
        width: '100%',
        maxWidth: 500,
        minHeight: 185,
        border: `1px solid ${colors.borderColor}`,
        borderRadius: 12,
        marginBottom: 25,
    };
});