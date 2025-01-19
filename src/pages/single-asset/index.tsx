import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ISingleAsset} from '../../common/types';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {Avatar, Button, Grid2, Typography} from '@mui/material';
import {FlexBetween} from '../../components/flex-between';
import {StyledGrid, StyledPriceTypography} from './styles';
import {createWatchlistRecord} from '../../store/thunks/assets';

export const SingleAsset: React.FC = (): React.ReactElement => {
    const {id} = useParams();
    const navigate = useNavigate();
    const assets: ISingleAsset[] = useAppSelector((state) => state.assets.assets);
    const styledGridProps = {sm: 6, xs: 12};
    const dispatch = useAppDispatch();

    return (
            <>
                {assets.length > 0 && assets.filter((a) => a.name === id as string).map((a) => (
                        <Grid2
                                container
                                spacing={2}
                                key={a.id}
                                sx={{
                                    padding: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                        >
                            <Grid2
                                    size={{xs: 12}}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                            >
                                <Typography marginBottom={5} variant='h1'>{a.name}</Typography>
                            </Grid2>
                            <Grid2 sx={{
                                padding: 5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px 100px',
                                flexWrap: 'wrap'
                            }}>
                                <StyledGrid size={styledGridProps}>
                                    <FlexBetween>
                                        <Avatar
                                                src={a.image}
                                                sx={{marginRight: 2}}
                                        />
                                        <Typography variant='h2'>
                                            {a.symbol.toUpperCase()}
                                        </Typography>
                                    </FlexBetween>
                                </StyledGrid>
                                <StyledGrid size={styledGridProps}>
                                    <FlexBetween>
                                        <StyledPriceTypography variant='h2'>
                                            Цена:
                                        </StyledPriceTypography>
                                        <Typography variant='h2'>
                                            ${a.current_price}
                                        </Typography>
                                    </FlexBetween>
                                </StyledGrid>
                                <StyledGrid size={styledGridProps}>
                                    <StyledPriceTypography variant='h3'>
                                        Изменение цены ($):
                                    </StyledPriceTypography>
                                    <Typography
                                            color={a.price_change_24h > 0 ? 'green' : 'brown'}
                                            variant='h3'
                                    >
                                        {a.price_change_24h.toFixed(2)}
                                    </Typography>
                                </StyledGrid>

                                <StyledGrid size={styledGridProps}>
                                    <StyledPriceTypography variant='h3'>
                                        Изменение цены (%):
                                    </StyledPriceTypography>
                                    <Typography
                                            color={a.price_change_percentage_24h > 0 ? 'green' : 'brown'}
                                            variant='h3'
                                    >
                                        {a.price_change_percentage_24h.toFixed(2)}
                                    </Typography>
                                </StyledGrid>
                            </Grid2>
                            <Grid2
                                    container
                                    justifyContent='center'
                                    width='100%'
                            >
                                <Button
                                        color='success'
                                        variant='outlined'
                                        onClick={() => navigate(-1)}
                                >
                                    Назад
                                </Button>
                                <Button
                                        color='success'
                                        variant='outlined'
                                        onClick={() => dispatch(createWatchlistRecord({
                                            name: a.name,
                                            assetId: a.id
                                        }))}
                                >
                                    Добавить в избранное
                                </Button>
                            </Grid2>

                        </Grid2>
                ))}
            </>
    );
};

