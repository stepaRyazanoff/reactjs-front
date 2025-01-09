import {createAsyncThunk} from '@reduxjs/toolkit';
import {coinGeckoApi} from '../../../utils/axios';
import {AxiosError} from 'axios';
import {IAssetResponse, ISingleAsset} from '../../../common/types';

export const getFavoriteAssets = createAsyncThunk<IAssetResponse, string, { rejectValue: string }>(
        'coins/markets',
        async (data, thunkAPI) => {
            try {
                const assets = await coinGeckoApi.get(`coins/${data}/market_chart?vs_currency=usd&days=90`);
                const singleAsset = await coinGeckoApi.get(`coins/markets?vs_currency=usd&ids=${data}&
                order=market_cap_desc&per_page=100&page=1&sparkline=false`);

                return {
                    name: data,
                    prices: assets.data.prices.slice(
                            assets.data.prices.length - 30,
                            assets.data.prices.length - 1
                    ),
                    singleAsset: singleAsset.data,
                };
            } catch (err) {
                const error = err as AxiosError;

                if (error.response && error.response.data) {
                    return thunkAPI.rejectWithValue((error.response.data as { message: string }).message);
                } else {
                    return thunkAPI.rejectWithValue(error.message);
                }
            }
        }
);

export const getTopPriceData = createAsyncThunk<ISingleAsset[], void, { rejectValue: string }>(
        'coins/markets/topPrice',
        async (_, thunkAPI) => {
            try {
                const assets = await coinGeckoApi
                        .get(`coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);

                return assets.data;
            } catch (err) {
                const error = err as AxiosError;

                if (error.response && error.response.data) {
                    return thunkAPI.rejectWithValue((error.response.data as { message: string }).message);
                } else {
                    return thunkAPI.rejectWithValue(error.message);
                }
            }
        }
);

