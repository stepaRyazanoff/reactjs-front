import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {LoginForm} from './login';
import {RegisterForm} from './register';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {AppErrors} from '../../common/errors';
import {SubmitHandler} from 'react-hook-form';
import {InputLoginData, InputRegisterData} from '../../common/types';
import {StyledRootBox} from './styles';
import {loginUser, registerUser} from '../../store/thunks/auth';

export const AuthRootComponent: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.auth.isLoading);
    const location = useLocation();

    const onSubmit: SubmitHandler<InputLoginData | InputRegisterData> = async (data) => {
        try {
            switch (location.pathname) {
                case '/login': {
                    await dispatch(loginUser(data));
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

                    await dispatch(registerUser(newUser));
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
                                isLoading={isLoading}
                                onSubmit={onSubmit}
                                navigate={navigate}
                        />
                )}
                {location.pathname === '/register' && (
                        <RegisterForm
                                isLoading={isLoading}
                                onSubmit={onSubmit}
                                navigate={navigate}
                        />)}
            </StyledRootBox>
    );
};

