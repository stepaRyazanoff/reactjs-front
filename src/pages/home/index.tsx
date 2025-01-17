import React from 'react';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {getFavoriteAssets, getTopPriceData} from '../../store/thunks/assets';
import {IAssetResponse, ISingleAsset} from '../../common/types';
import {Grid2} from '@mui/material';
import {
    AssetName,
    ItemCapitalize,
    ItemDetails,
    ItemPrice,
    StyledAreaChartBlock, StyledLineChartBlock,
    StyledRootBox, StyledTopPriceTable
} from './styles';
import {
    TrendingUp,
    TrendingDown
} from '@mui/icons-material';
import {AreaChart} from '../../components/charts/area-chart';
import {LineChart} from '../../components/charts/line-chart';
import {TopPrice} from '../../components/top-price';

export const Home: React.FC = (): React.ReactElement => {
    const favoriteAssets: IAssetResponse[] = useAppSelector((state) => state.assets.favoriteAssets);
    const assets: ISingleAsset[] = useAppSelector((state) => state.assets.assets);
    const sortedAssets = [...assets].sort((a, b) => b.current_price - a.current_price);
    const dispatch = useAppDispatch();
    const fetchDataRef = React.useRef(false);
    const fetchData = React.useCallback((data: string[]) => {
        data.forEach((n: string) => {
            dispatch(getFavoriteAssets(n));
        });
    }, [dispatch]);

    React.useEffect(() => {
        let assets = ['bitcoin', 'ethereum'];
        if (fetchDataRef.current) return;
        fetchData(assets);
        dispatch(getTopPriceData());
        fetchDataRef.current = true;
    }, [fetchData, dispatch]);

    return (
            <StyledRootBox>
                <Grid2 container spacing={2}>
                    {favoriteAssets.map((e) => {
                        const currentPrice = e.singleAsset.map((e) => e.current_price);
                        const changePrice = e.singleAsset.map((e) => e.price_change_percentage_24h);
                        return (
                                <Grid2 size={{lg: 6, sm: 6, xs: 12}}
                                       key={e.name}
                                >
                                    <StyledAreaChartBlock container>
                                        <Grid2 size={{lg: 6, sm: 6, xs: 12}}>
                                            <AssetName> {e.name}</AssetName>
                                            <ItemDetails>
                                                <ItemPrice>${currentPrice}</ItemPrice>
                                                <ItemCapitalize sx={{
                                                    '& > :first-of-type': {marginRight: '5px'},
                                                    color: +changePrice > 0 ? 'green' : 'brown',
                                                }}>
                                                    {Number(changePrice) > 0
                                                            ? <TrendingUp/>
                                                            : <TrendingDown/>}
                                                    <span>{Number(changePrice).toFixed(2)}%</span>
                                                </ItemCapitalize>
                                            </ItemDetails>
                                        </Grid2>
                                        <Grid2 size={{lg: 6, sm: 6, xs: 12}}>
                                            <AreaChart data={e.prices}/>
                                        </Grid2>
                                    </StyledAreaChartBlock>
                                </Grid2>
                        );
                    })}
                </Grid2>
                {favoriteAssets.length > 0 && (
                        <StyledLineChartBlock container>
                            <Grid2 size={{lg: 12, sm: 12, xs: 12}}>
                                <LineChart data={favoriteAssets}/>
                            </Grid2>
                        </StyledLineChartBlock>
                )}
                {sortedAssets.length > 0 && (
                        <StyledTopPriceTable container>
                            <Grid2 size={{lg: 12, sm: 12, xs: 12}}>
                                <TopPrice assets={sortedAssets.slice(0, 15)}/>
                            </Grid2>
                        </StyledTopPriceTable>
                )}
            </StyledRootBox>
    );
};

