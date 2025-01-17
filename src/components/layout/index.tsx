import React from 'react';
import {TopBar} from '../top-bar';
import {Outlet, useLocation} from 'react-router-dom';
import {useMediaQuery} from '@mui/material';
import {Sidebar} from '../sidebar';
import {StyledContentBox, StyledRootBox} from './styles';

export const LayoutComponent: React.FC = (): React.ReactElement => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:760px)');
    return (
            location.pathname === '/login' ||
            location.pathname === '/register'
                    ? (
                            <>
                                <Outlet/>
                            </>
                    ) : (
                            <StyledRootBox isNonMobile={isNonMobile}>
                                <Sidebar
                                        isNonMobile={isNonMobile}
                                        drawerWidth='250px'
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                />
                                <StyledContentBox>
                                    <TopBar
                                            isOpen={isOpen}
                                            setIsOpen={setIsOpen}
                                            isNoneMobile={isNonMobile}
                                    />
                                    <Outlet/>
                                </StyledContentBox>
                            </StyledRootBox>
                    )
    );
};

