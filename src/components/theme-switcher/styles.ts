import {Grid2, styled, Theme} from '@mui/material';

export const StyledTopBarIcons = styled(Grid2)(({theme}: { theme: Theme }) => {
    return {
        display: 'flex',
        alignItems: 'center',
        paddingRight: '35px',
        flexWrap: 'wrap',
    };
});

