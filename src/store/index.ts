import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './slices/auth';

export const store = configureStore({
    reducer: {
        auth: loginSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;