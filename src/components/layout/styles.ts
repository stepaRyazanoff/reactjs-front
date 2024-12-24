import {Box, styled} from '@mui/material';

interface IStyledMainBox {
    isNonMobile: boolean;
}

export const StyledContentBox = styled(Box)(() => ({
    flexBasis: '100%',
}));

export const StyledRootBox = styled(Box, {shouldForwardProp: (prop) => prop !== 'isNonMobile'})
        < IStyledMainBox > (({isNonMobile}) => ({
            display: isNonMobile ? 'flex' : 'block',
            width: '100%',
            height: '100%',
        }));