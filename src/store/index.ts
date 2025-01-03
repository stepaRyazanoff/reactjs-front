import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './slices/auth';
import assetSlice from './slices/assets';

export const store = configureStore({
    reducer: {
        auth: loginSlice,
        assets: assetSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;