import {Grid2, styled, Theme} from '@mui/material';
import {tokens} from '../../theme';

export const StyledAssetsTableBlock = styled(Grid2)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        backgroundColor: `${theme.palette.mode === 'light'
                ? colors.primary.DEFAULT
                : colors.primary[600]
        }`,
        padding: '20px 16px',
        marginBottom: 32,
        minHeight: 270,
        border: `1px solid ${colors.borderColor}`,
        borderRadius: 12,
        '& .MuiPaper-root': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            backgroundImage: 'none'
        }
    };
});