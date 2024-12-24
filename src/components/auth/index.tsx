import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {LoginPage} from './login';
import {RegisterPage} from './register';
import './style.scss';
import {Box} from '@mui/material';
import {axiosInstance} from '../../utils/axios';
import {useAppDispatch} from '../../utils/hooks';
import {AppDispatch} from '../../store';
import {login} from '../../store/slices/auth';
import {AppErrors} from '../../common/errors';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';

export type InputRegisterData = {
    email: string;
    firstName: string;
    userName: string;
    password: string;
    repeatPassword: string;
}

export type InputLoginData = {
    email: string;
    password: string;
}

export const AuthRootComponent: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch<AppDispatch>();
    const location = useLocation();

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            switch (location.pathname) {
                case '/login': {
                    console.log(data);

                    //     for (const key in loginUserData) {
                    //         if (!loginUserData[key as keyof ILoginUserData].trim()) {
                    //             throw new Error(AppErrors.FILL_IN_ALL_FIELDERS_OF_LOGIN);
                    //         }
                    //     }
                    // const userData = await axiosInstance.post('auth/login', data);
                    // await dispatch(login(userData.data));
                    // navigate('/');
                    break;
                }
                case '/register': {
                    console.log(data);
                    // for (const key in registerUserData) {
                    //     if (!registerUserData[key as keyof IRegisterUserData].trim()) {
                    //         throw new Error(AppErrors.FILL_IN_ALL_FIELDERS_OF_REGISTERS);
                    //     }
                    // }
                    // if (registerUserData.password !== registerUserData.repeatPassword) {
                    //     throw new Error(AppErrors.PASSWORDS_DO_NOT_MATCH);
                    // }
                    //
                    // const newUser = {
                    //     firstName: registerUserData.firstName,
                    //     userName: registerUserData.userName,
                    //     email: registerUserData.email,
                    //     password: registerUserData.password
                    // };
                    // const userData = await axiosInstance.post('auth/register', newUser);
                    // const loginData = {
                    //     email: userData.data.email,
                    //     password: registerUserData.password
                    // };
                    // const registeredUserData = await axiosInstance.post('auth/login', loginData);
                    // await dispatch(login(registeredUserData.data));
                    // navigate('/');
                    break;
                }
                default:
                    throw new Error(AppErrors.INCORRECT_PATH);
            }
        } catch (error: any) {
            // Проверка, является ли это пользовательской ошибкой
            if (error instanceof Error) {
                console.error('Ошибка:', error.message);
                alert(error.message); // Для отображения пользователю
            } else {
                console.error(AppErrors.UNKNOWN_ERROR, error);
            }
        }
    };

    return (
            <div className='root'>
                <form
                        className='form'
                        onSubmit={handleSubmit(onSubmit)}
                >
                    <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='column'
                            maxWidth={640}
                            margin='auto'
                            padding={5}
                            borderRadius={5}
                            boxShadow={'5px 5px 10px #ccc'}
                    >
                        {location.pathname === '/login' && (
                                <LoginPage
                                        errors={errors}
                                        register={register}
                                        navigate={navigate}
                                />)}
                        {location.pathname === '/register' && (
                                <RegisterPage
                                        register={register}
                                        navigate={navigate}
                                />)}
                    </Box>
                </form>
            </div>
    );
};

