import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
    Box,
    IconButton,
    List,
    ListItem,
    Typography,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    StyledSidebarHeaderBox,
    StyledDrawer,
    StyledListItemButton,
    StyledNavBox,
    StyledNavList,
    StyledHeaderTypography
} from './styles';
import {FlexBetween} from '../flex-between';
import {navMenu} from '../../common/mock/navigate';
import {ArrowBackIosNewOutlined, LogoutOutlined} from '@mui/icons-material';
import {ThemeSwitcher} from '../theme-switcher';
import {SearchBar} from '../search-bar';

interface IProps {
    isNonMobile: boolean;
    drawerWidth: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const Sidebar: React.FC<IProps> = ({isNonMobile, drawerWidth, isOpen, setIsOpen}): React.ReactElement => {
    const [active, setActive] = React.useState<string>('');
    const {pathname} = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    return (
            <Box component='nav'>
                {isOpen && (
                        <StyledDrawer
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                variant='persistent'
                                anchor='left'
                                drawerWidth={drawerWidth}
                        >
                            <StyledNavBox>
                                <Box>
                                    <FlexBetween>
                                        <StyledSidebarHeaderBox>
                                            <StyledHeaderTypography variant='h1'>
                                                Demo
                                            </StyledHeaderTypography>

                                            {!isNonMobile && (
                                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                                        <ArrowBackIosNewOutlined/>
                                                    </IconButton>
                                            )}
                                        </StyledSidebarHeaderBox>
                                    </FlexBetween>
                                </Box>
                                {!isNonMobile && (
                                        <List>
                                            <ListItem>
                                                <SearchBar/>
                                            </ListItem>
                                        </List>
                                )}
                                <StyledNavList>
                                    {navMenu.map((el) => (
                                            <ListItem key={el.id}>
                                                <StyledListItemButton
                                                        active={active}
                                                        path={el.path}
                                                        onClick={() => navigate(`${el.path}`)}
                                                >
                                                    <ListItemIcon>
                                                        {el.icon}
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <Typography variant='body1'>
                                                            {el.name}
                                                        </Typography>
                                                    </ListItemText>
                                                </StyledListItemButton>
                                            </ListItem>
                                    ))}
                                </StyledNavList>
                            </StyledNavBox>
                            <Box sx={{width: '100%'}}>
                                <List>
                                    {!isNonMobile && (
                                            <ListItem disablePadding>
                                                <Box paddingLeft='22px'>
                                                    <ThemeSwitcher/>
                                                </Box>
                                            </ListItem>
                                    )}
                                    <ListItem>
                                        <StyledListItemButton>
                                            <ListItemIcon>
                                                <LogoutOutlined/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography> Logout </Typography>
                                            </ListItemText>
                                        </StyledListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </StyledDrawer>
                )}
            </Box>
    );
};

