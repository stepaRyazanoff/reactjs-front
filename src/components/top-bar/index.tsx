import React, {useContext} from 'react';
import {Box, Grid2, InputBase, useTheme} from '@mui/material';
import {
    DarkModeOutlined,
    WbSunnyOutlined,
    NotificationsOutlined,
    SearchOutlined
} from '@mui/icons-material';
import {ColorModeContext, tokens} from '../../theme';
import {useAppSelector} from '../../utils/hooks';
import {StyledIconButton} from './styles';

export const TopBar = () => {
    const user = useAppSelector((state) => state.auth.user);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
            <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                    px='32px'
                    py='24px'
            >
                <Grid2>Welcome {user?.firstName}</Grid2>
                <Box display='flex'>
                    <Grid2 sx={{
                        display: 'flex',
                        alignItems: 'center',
                        pr: '37px',
                        borderRight: `1px solid ${colors.borderColor}`
                    }}
                           onClick={colorMode.toggleColorMode}
                    >
                        <StyledIconButton sx={{mr: '45px'}}>
                            {theme.palette.mode === 'dark'
                                    ? (<DarkModeOutlined/>)
                                    : (<WbSunnyOutlined/>)}
                        </StyledIconButton>
                        <StyledIconButton>
                            <NotificationsOutlined/>
                        </StyledIconButton>
                    </Grid2>

                    <Grid2
                            sx={{
                                display: 'flex',
                                backgroundColor: `${colors.primary[600]}`,
                                borderRadius: '8px',
                                ml: '28px',
                            }}
                    >
                        <StyledIconButton>
                            <SearchOutlined/>
                        </StyledIconButton>
                        <InputBase
                                placeholder='Поиск'
                                sx={{
                                    px: '15px',
                                    py: '10px'
                                }}
                        />
                    </Grid2>
                </Box>
            </Box>
    );
};
