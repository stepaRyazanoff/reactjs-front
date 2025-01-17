import {IAssetResponse, IAssetsState, ISingleAsset} from '../../../common/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getFavoriteAssets, getTopPriceData} from '../../thunks/assets';

const initialState: IAssetsState = {
    assets: [],
    favoriteAssets: [],
    isLoading: false,
};

export const assetSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavoriteAssets.pending, (state: IAssetsState) => {
            state.isLoading = true;
            state.favoriteAssets = [];
        });

        builder.addCase(getFavoriteAssets.fulfilled,
                (state: IAssetsState, action: PayloadAction<IAssetResponse>) => {
                    state.favoriteAssets.push(action.payload);
                    state.isLoading = false;
                });

        builder.addCase(getFavoriteAssets.rejected, (state: IAssetsState) => {
            state.isLoading = false;
        });

        builder.addCase(getTopPriceData.pending, (state: IAssetsState) => {
            state.isLoading = true;
            state.assets = [];
        });

        builder.addCase(getTopPriceData.fulfilled,
                (state: IAssetsState, action: PayloadAction<ISingleAsset[]>) => {
                    state.assets = action.payload;
                    state.isLoading = false;
                });

        builder.addCase(getTopPriceData.rejected, (state: IAssetsState) => {
            state.isLoading = false;
        });
    }
});

export default assetSlice.reducer;