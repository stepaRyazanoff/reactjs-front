import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Box, Drawer, IconButton, Typography, useTheme} from '@mui/material';
import {FlexBetween} from '../flex-between';
import {ArrowForwardIosOutlined, ArrowBackIosNewOutlined} from '@mui/icons-material';

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
                            <Box width='100%'>
                                <Box>
                                    <FlexBetween>
                                        <Box
                                                display='flex'
                                                alignItems='center'
                                                gap='10px'
                                        >
                                            <Typography>
                                                Demo
                                            </Typography>
                                            {!isNonMobile && (
                                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                                        <ArrowBackIosNewOutlined/>
                                                    </IconButton>
                                            )}
                                        </Box>
                                    </FlexBetween>
                                </Box>
                            </Box>
                        </Drawer>
                )}
            </Box>
    );
};

