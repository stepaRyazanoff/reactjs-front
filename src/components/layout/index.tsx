import React from 'react';
import {ILayout} from '../../common/types/layout';
import {TopBar} from '../top-bar';
import {useLocation} from 'react-router-dom';
import {Box, useMediaQuery} from '@mui/material';
import {Sidebar} from '../sidebar';

export const LayoutComponent: React.FC<ILayout> = ({children}) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(true);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:600px)');
    return (
            location.pathname === '/login' ||
            location.pathname === '/register'
                    ? (
                            <>
                                {children}
                            </>
                    ) : (
                            <Box
                                    display={isNonMobile ? 'flex' : 'block'}
                                    width='100%'
                                    height='100%'
                            >
                                <Sidebar
                                        isNonMobile={isNonMobile}
                                        drawerWidth='250'
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                />
                                <Box>
                                    <TopBar/>
                                    {children}
                                </Box>
                            </Box>
                    )
    );
};

