import React from 'react';
import {ILayout} from '../../common/types/layout';
import {TopBar} from '../top-bar';
import {useLocation} from 'react-router-dom';
import {useMediaQuery} from '@mui/material';
import {Sidebar} from '../sidebar';
import {StyledBox, StyledMainBox} from './styles';

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
                            <StyledMainBox isNonMobile={isNonMobile}>
                                <Sidebar
                                        isNonMobile={isNonMobile}
                                        drawerWidth='250px'
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                />
                                <StyledBox>
                                    <TopBar/>
                                    {children}
                                </StyledBox>
                            </StyledMainBox>
                    )
    );
};

