import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState, IAuthUserData} from '../../../common/types';

const initialState: IAuthState = {
    user: null,
    isLogged: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: IAuthState, action: PayloadAction<IAuthUserData>) => {
            state.user = action.payload.user;
            state.isLogged = true;
        }
    }
});

export const {login} = authSlice.actions;
export default authSlice.reducer;