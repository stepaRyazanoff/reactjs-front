import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Typography,
    Drawer,
    ListItemIcon,
    ListItemText,
    useTheme
} from '@mui/material';
import {FlexBetween} from '../flex-between';
import {
    ArrowForwardIosOutlined,
    ArrowBackIosNewOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import {navMenu} from '../../common/mock/navigate';
import {tokens} from '../../theme';
import {StyledBox, StyledListItemButton} from './styles';

interface IProps {
    isNonMobile: boolean;
    drawerWidth: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const Sidebar: React.FC<IProps> = ({isNonMobile, drawerWidth, isOpen, setIsOpen}) => {
    const [active, setActive] = React.useState<string>('');
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    React.useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
            <Box component='nav'>
                {isOpen && (
                        <Drawer
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                variant='persistent'
                                anchor='left'
                                sx={{
                                    width: drawerWidth,
                                    '& .MuiDrawer-paper': {
                                        color: theme.palette.secondary.main,
                                        backgroundColor: theme.palette.primary.main,
                                        boxSizing: 'border-box',
                                        width: drawerWidth,
                                    }
                                }}
                        >
                            <Box width='100%'
                                 sx={{borderBottom: `1px solid ${colors.borderColor}`}}
                            >
                                <Box>
                                    <FlexBetween>
                                        <StyledBox>
                                            <Typography
                                                    variant='h1'
                                                    color={
                                                        theme.palette.mode === 'dark'
                                                                ? colors.white.DEFAULT
                                                                : colors.black.DEFAULT
                                                    }
                                            >
                                                Demo
                                            </Typography>

                                            {!isNonMobile && (
                                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                                        <ArrowBackIosNewOutlined/>
                                                    </IconButton>
                                            )}
                                        </StyledBox>
                                    </FlexBetween>
                                </Box>
                                <List sx={{marginBottom: '55px'}}>
                                    {navMenu.map((el) => (
                                            <ListItem key={el.id}>
                                                <StyledListItemButton onClick={() => navigate(`${el.path}`)}>
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
                                </List>
                            </Box>
                            <Box width='100%'>
                                <List>
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
                        </Drawer>
                )}
            </Box>
    );
};

