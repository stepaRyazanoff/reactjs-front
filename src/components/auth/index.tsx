import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {LoginForm} from './login';
import {RegisterForm} from './register';
import {axiosInstance} from '../../utils/axios';
import {useAppDispatch} from '../../utils/hooks';
import {AppDispatch} from '../../store';
import {login} from '../../store/slices/auth';
import {AppErrors} from '../../common/errors';
import {SubmitHandler} from 'react-hook-form';
import {InputLoginData, InputRegisterData} from '../../common/types';
import {StyledRootBox} from './styles';

export const AuthRootComponent: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch<AppDispatch>();
    const location = useLocation();

    const onSubmit: SubmitHandler<InputLoginData | InputRegisterData> = async (data) => {
        try {
            switch (location.pathname) {
                case '/login': {

                    const userData = await axiosInstance.post('auth/login', data as InputLoginData);
                    dispatch(login(userData.data));
                    navigate('/');
                    break;
                }
                case '/register': {
                    const registerData = data as InputRegisterData;
                    if (data.password !== registerData.repeatPassword) {
                        throw new Error(AppErrors.PasswordsDoNotMatch);
                    }

                    const newUser = {
                        firstName: registerData.firstName,
                        userName: registerData.userName,
                        email: registerData.email,
                        password: registerData.password
                    };
                    const userData = await axiosInstance.post('auth/register', newUser);
                    const loginData = {
                        email: userData.data.email,
                        password: data.password
                    };
                    const registeredUserData = await axiosInstance.post('auth/login', loginData);
                    dispatch(login(registeredUserData.data));
                    navigate('/');
                    break;
                }
                default:
                    throw new Error(AppErrors.IncorrectPath);
            }
        } catch (error: any) {
            // Проверка, является ли это пользовательской ошибкой
            if (error instanceof Error) {
                console.error('Ошибка:', error.message);
                alert(error.message); // Для отображения пользователю
            } else {
                console.error(AppErrors.UnknownError, error);
            }
        }
    };

    return (
            <StyledRootBox>
                {location.pathname === '/login' && (
                        <LoginForm
                                onSubmit={onSubmit}
                                navigate={navigate}
                        />
                )}
                {location.pathname === '/register' && (
                        <RegisterForm
                                onSubmit={onSubmit}
                                navigate={navigate}
                        />)}
            </StyledRootBox>
    );
};

