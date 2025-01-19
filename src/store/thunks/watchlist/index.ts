import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosInstanceAuth} from '../../../utils/axios';
import {AxiosError} from 'axios';
import {IGetUserAssetResponse} from '../../../common/types';

export const getWatchListElements = createAsyncThunk<IGetUserAssetResponse[], void, { rejectValue: string }>(
        'watchlist/getElements',
        async (_, thunkAPI) => {
            try {
                const userAssets = await axiosInstanceAuth.get('watchlist/get-elements');
                return userAssets.data;
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