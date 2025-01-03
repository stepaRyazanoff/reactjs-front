import {createAsyncThunk} from '@reduxjs/toolkit';
import {
    IAuthUserResponse,
    InputLoginData,
    IUserRegisterData,
} from '../../../common/types';
import {axiosInstance} from '../../../utils/axios';
import {AxiosError} from 'axios';

export const loginUser = createAsyncThunk<IAuthUserResponse, InputLoginData, { rejectValue: string }>(
        'auth/login',
        async (data, thunkAPI) => {
            try {
                const userData = await axiosInstance.post('auth/login', data);
                sessionStorage.setItem('token', userData.data.token);
                sessionStorage.setItem('userName', userData.data.user.firstName);
                return userData.data;
            } catch (err) {
                const error = err as AxiosError;

                if (error.response && error.response.data) {
                    return thunkAPI.rejectWithValue((error.response.data as { message: string }).message);
                } else {
                    return thunkAPI.rejectWithValue(error.message);
                }
            }
        });

export const registerUser = createAsyncThunk<void, IUserRegisterData, { rejectValue: string }>(
        'auth/register',
        async (data, thunkAPI) => {
            try {
                const userData = await axiosInstance.post('auth/register', data);
                await thunkAPI.dispatch(loginUser({
                    email: userData.data.email,
                    password: data.password
                }));
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