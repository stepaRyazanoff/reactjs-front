import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './slices/auth';
import assetSlice from './slices/assets';
import watchlistSlice from './slices/watchlist';

export const store = configureStore({
    reducer: {
        auth: loginSlice,
        assets: assetSlice,
        watchlist: watchlistSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;