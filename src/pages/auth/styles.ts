import {Box, styled, Typography} from '@mui/material';
import {AppLoadingButton} from '../../components/loading-button';

export const StyledRootBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    padding: '20px'
}));

export const StyledAuthBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '640px',
    flexDirection: 'column',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 2px #ccc',
}));

export const StyledForm = styled('form')(() => ({
    flexBasis: '100%',
}));

export const StyledHeaderText = styled(Typography)(() => ({
    fontSize: '32px'
}));

export const StyledSubheaderText = styled(Typography)(() => ({
    padding: '10px',
}));

export const StyledSubmitButton = styled(AppLoadingButton)(() => ({
    marginTop: '10px',
    marginBottom: '10px',
    width: '60%',
}));

export const StyledFormBottomLink = styled(Typography)(() => ({}));

export const StyledAuthLink = styled('span')(() => ({
    color: '#bdb4ea',
    cursor: 'pointer',
    marginLeft: '10px'
}));








