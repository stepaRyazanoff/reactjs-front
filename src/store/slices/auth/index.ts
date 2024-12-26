import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState, IAuthUserResponse} from '../../../common/types';
import {loginUser} from '../../thunks/auth';

const initialState: IAuthState = {
    user: null,
    isLogged: false,
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state: IAuthState) => {
            state.isLogged = false;
            state.isLoading = true;
        });

        builder.addCase(loginUser.fulfilled, (state: IAuthState, action: PayloadAction<IAuthUserResponse>) => {
            state.user = action.payload.user;
            state.isLogged = true;
            state.isLoading = false;
        });

        builder.addCase(loginUser.rejected, (state: IAuthState) => {
            state.isLogged = false;
            state.isLoading = false;
        });
    }
});

export default loginSlice.reducer;