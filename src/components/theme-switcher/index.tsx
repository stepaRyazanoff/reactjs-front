import React from 'react';
import {DarkModeOutlined, NotificationsOutlined, WbSunnyOutlined} from '@mui/icons-material';
import { useTheme} from '@mui/material';
import {ColorModeContext} from '../../theme';
import {StyledTopBarIcons} from './styles';
import {StyledIconButton} from '../icon-button';

export const ThemeSwitcher = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
            <StyledTopBarIcons onClick={colorMode.toggleColorMode}>

                    <StyledIconButton sx={{mr: '15px'}}>
                        {theme.palette.mode === 'dark'
                                ? <DarkModeOutlined/>
                                : <WbSunnyOutlined/>}
                    </StyledIconButton>

                <StyledIconButton>
                    <NotificationsOutlined/>
                </StyledIconButton>
            </StyledTopBarIcons>
    );
};

