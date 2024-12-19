import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState, IPublicUser} from '../../../common/types';

const initialState: IAuthState = {
    user: null,
    isLogged: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: IAuthState, action: PayloadAction<IPublicUser>) => {
            state.user = action.payload;
            state.isLogged = true;
        }
    }
});

export const {login} = authSlice.actions;
export default authSlice.reducer;