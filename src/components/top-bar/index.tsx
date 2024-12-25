import React, {useContext} from 'react';
import {Typography, useTheme} from '@mui/material';
import {
    DarkModeOutlined,
    WbSunnyOutlined,
    NotificationsOutlined,
    SearchOutlined
} from '@mui/icons-material';
import {
    StyledTopBarIcons,
    StyledSearchBlock,
    StyledIconButton,
    StyledInputBase,
    StyledTopBarBox,
    StyledToolbar,
    StyledAppBar,
    StyledMenuIcon
} from './styles';
import {ColorModeContext} from '../../theme';
import {useAppSelector} from '../../utils/hooks';
import {FlexBetween} from '../flex-between';

interface IProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const TopBar: React.FC<IProps> = ({isOpen, setIsOpen}): React.ReactElement => {
    const user = useAppSelector((state) => state.auth.user);
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
            <StyledAppBar>
                <StyledToolbar>
                    <FlexBetween>
                        <StyledMenuIcon onClick={() => setIsOpen(!isOpen)}/>
                        <Typography variant='h3'>Welcome {user?.firstName}</Typography>
                    </FlexBetween>
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
                </StyledToolbar>
            </StyledAppBar>
    );
};
