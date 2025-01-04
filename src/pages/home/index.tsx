import React from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {getFavoriteAssets} from '../../store/thunks/assets';
import {IAssetResponse} from '../../common/types';
import {Grid2} from '@mui/material';
import {
    AssetName,
    ItemCapitalize,
    ItemDetails,
    ItemPrice,
    StyledChartItems,
    StyledRootBox
} from './styles';
import {AreaChart} from '../../components/charts/area-chart';

export const Home: React.FC = (): React.ReactElement => {
    const favoriteAssets: IAssetResponse[] = useAppSelector((state) => state.assets.favoriteAssets);
    // const isLoading = useAppSelector((state) => state.assets.isLoading);
    const dispatch = useAppDispatch();
    const fetchDataRef = React.useRef(false);

    // const favoriteAssetsNames = ['bitcoin', 'ethereum'];

    const fetchData = React.useCallback((data: string[]) => {
        data.forEach((n: string) => {
            dispatch(getFavoriteAssets(n));
        });
    }, [dispatch]);

    React.useEffect(() => {
        let assets = ['bitcoin', 'ethereum'];
        if (fetchDataRef.current) return;
        fetchData(assets);
        fetchDataRef.current = true;
    }, [fetchData]);

    return (
            <StyledRootBox>
                <Grid2 container spacing={2}>
                    {favoriteAssets.map((e) => {
                        const currentPrice = e.data.prices[0];
                        const currentCap = e.data.market_caps[0];
                        return (
                                <Grid2 size={{lg: 6, sm: 6, xs: 12}}
                                       key={e.name}
                                >
                                    <StyledChartItems container>
                                        <Grid2 size={{lg: 6, sm: 6, xs: 12}}>
                                            <AssetName> {e.name}</AssetName>
                                            <ItemDetails>
                                                <ItemPrice>$ {currentPrice[1].toFixed(2)}</ItemPrice>
                                                <ItemCapitalize>$ {currentCap[1].toFixed(0)}</ItemCapitalize>
                                            </ItemDetails>
                                        </Grid2>
                                        <Grid2 size={{lg: 6, sm: 6, xs: 12}}>
                                            <AreaChart data={e.data.prices}/>
                                        </Grid2>
                                    </StyledChartItems>
                                </Grid2>
                        );
                    })}
                </Grid2>
            </StyledRootBox>
    );
};

