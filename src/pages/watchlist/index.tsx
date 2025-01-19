import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {getWatchListElements} from '../../store/thunks/watchlist';
import {getTopPriceData} from '../../store/thunks/assets';
import {AssetsTable} from '../../components/assets-table';
import {Grid2, Typography} from '@mui/material';
import {StyledAssetsTableBlock} from './styles';

export const Watchlist: React.FC = (): React.ReactElement => {
    const watchlist = useAppSelector((state) => state.watchlist.watchlist);
    const assets = useAppSelector((state) => state.assets.assets);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTopPriceData());
        dispatch(getWatchListElements());
    }, [dispatch]);

    const filteredAssets = assets.filter((asset) => watchlist.some((a) => asset.id === a.assetId));

    return (
            <Grid2 padding='10px 20px'>
                <Grid2 textAlign='center'>
                    <Typography
                            variant='h2'
                            margin='25px 0'
                    >
                        Избранное
                    </Typography>
                </Grid2>
                <StyledAssetsTableBlock>
                    <AssetsTable assets={filteredAssets}/>
                </StyledAssetsTableBlock>
            </Grid2>

    );
};

