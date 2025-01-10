import React from 'react';
import {Grid2, Typography} from '@mui/material';
import {
    StyledToolbar,
    StyledAppBar,
    StyledMenuIcon
} from './styles';
import {FlexBetween} from '../flex-between';
import {ThemeSwitcher} from '../theme-switcher';
import {SearchBar} from '../search-bar';

interface IProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    isNoneMobile: boolean;
}

export const TopBar: React.FC<IProps> = ({isOpen, setIsOpen, isNoneMobile}): React.ReactElement => {
    const userName = sessionStorage.getItem('userName');

    return (
            <StyledAppBar>
                <StyledToolbar>
                    <Grid2
                            container
                            flexBasis='100%'
                            justifyContent='space-between'
                            alignItems='center'
                    >
                        <Grid2 size={{sm: 3, lg: 3}}>
                            <FlexBetween>
                                <StyledMenuIcon onClick={() => setIsOpen(!isOpen)}/>
                                <Typography variant='h3'>Welcome {userName}</Typography>
                            </FlexBetween>
                        </Grid2>

                        {isNoneMobile && (
                                <Grid2
                                        display='flex'
                                        justifyContent='flex-end'
                                        size={{sm: 9, lg: 9}}
                                >
                                    <ThemeSwitcher/>
                                    <SearchBar/>
                                </Grid2>
                        )}

                    </Grid2>
                </StyledToolbar>
            </StyledAppBar>
    );
};
