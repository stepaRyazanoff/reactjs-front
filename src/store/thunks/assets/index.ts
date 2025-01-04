import {createAsyncThunk} from '@reduxjs/toolkit';
import {coinGeckoApi} from '../../../utils/axios';
import {AxiosError} from 'axios';
import {IAssetResponse} from '../../../common/types';

export const getFavoriteAssets = createAsyncThunk<IAssetResponse, string, { rejectValue: string }>(
        'coins/markets',
        async (data, thunkAPI) => {
            try {
                const assets = await coinGeckoApi.get(`coins/${data}/market_chart?vs_currency=usd&days=90`);
                return {name: data, data: assets.data};
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

