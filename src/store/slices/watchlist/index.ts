import {IGetUserAssetResponse, IWatchlistState} from '../../../common/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getWatchListElements} from '../../thunks/watchlist';

const initialState: IWatchlistState = {
    watchlist: [],
    isLoading: false,
};

export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchListElements.pending, (state: IWatchlistState) => {
            state.isLoading = true;
        });

        builder.addCase(getWatchListElements.fulfilled,
                (state: IWatchlistState, action: PayloadAction<IGetUserAssetResponse[]>) => {
                    state.watchlist = action.payload;
                    state.isLoading = false;
                });

        builder.addCase(getWatchListElements.rejected,
                (state: IWatchlistState) => {
                    state.isLoading = false;
                });
    }
});

export default watchlistSlice.reducer;