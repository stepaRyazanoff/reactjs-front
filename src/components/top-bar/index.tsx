import React, {useContext} from 'react';
import {Grid2, useTheme} from '@mui/material';
import {
    DarkModeOutlined,
    WbSunnyOutlined,
    NotificationsOutlined,
    SearchOutlined
} from '@mui/icons-material';
import {
    StyledRootBox,
    StyledTopBarIcons,
    StyledSearchBlock,
    StyledIconButton,
    StyledInputBase,
    StyledTopBarBox
} from './styles';
import {ColorModeContext} from '../../theme';
import {useAppSelector} from '../../utils/hooks';


export const TopBar = () => {
    const user = useAppSelector((state) => state.auth.user);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
            <StyledRootBox>
                <Grid2>Welcome {user?.firstName}</Grid2>
                <StyledTopBarBox>
                    <StyledTopBarIcons onClick={colorMode.toggleColorMode}>

                        <StyledIconButton sx={{mr: '45px'}}>
                            {theme.palette.mode === 'dark'
                                    ? <DarkModeOutlined/>
                                    : <WbSunnyOutlined/>}
                        </StyledIconButton>

                        <StyledIconButton>
                            <NotificationsOutlined/>
                        </StyledIconButton>
                    </StyledTopBarIcons>

                    <StyledSearchBlock>

                        <StyledIconButton sx={{ml: '5px'}}>
                            <SearchOutlined/>
                        </StyledIconButton>
                        <StyledInputBase placeholder='Поиск'/>
                    </StyledSearchBlock>
                </StyledTopBarBox>
            </StyledRootBox>
    );
};
