import {Box, Grid2, styled, Theme} from '@mui/material';
import {tokens} from '../../theme';

export const StyledRootBox = styled(Box)(() => ({
    padding: '32px'
}));

export const StyledChartItems = styled(Grid2)(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        padding: '20px 16px',
        backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
        minHeight: 185,
        border: `1px solid ${colors.borderColor}`,
        borderRadius: 12
    };
});

export const AssetName = styled('h3')(() => ({
    fontSize: 25,
    fontWeight: 600,
    lineHeight: '30px',
    textTransform: 'capitalize',
}));

export const ItemDetails = styled('div')(() => ({
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: '20px'
}));

export const ItemPrice = styled('h3')(() => ({
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '48px',
}));

export const ItemCapitalize = styled('p')(({theme}: { theme: Theme }) => {
    const colors = tokens(theme.palette.mode);
    return {
        color: `${colors.secondary.DEFAULT}`,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '21px'
    };
});
