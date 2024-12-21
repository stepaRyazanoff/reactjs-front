import React, {FormEvent} from 'react';
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

export interface ILoginUserData {
    email: string;
    password: string;
}

export interface IRegisterUserData {
    email: string;
    firstName: string;
    userName: string;
    password: string;
    repeatPassword: string;
}

export const AuthRootComponent: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch<AppDispatch>();
    const location = useLocation();
    const [loginUserData, setLoginUserData] = React.useState<ILoginUserData>({
        email: '',
        password: ''
    });
    const [registerUserData, setRegisterUserData] = React.useState<IRegisterUserData>({
        email: '',
        firstName: '',
        userName: '',
        password: '',
        repeatPassword: '',
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            switch (location.pathname) {
                case '/login': {

                    for (const key in loginUserData) {
                        if (!loginUserData[key as keyof ILoginUserData].trim()) {
                            throw new Error(AppErrors.FILL_IN_ALL_FIELDERS_OF_LOGIN);
                        }
                    }
                    const userData = await axiosInstance.post('auth/login', loginUserData);
                    await dispatch(login(userData.data));
                    navigate('/');
                    break;
                }
                case '/register': {
                    for (const key in registerUserData) {
                        if (!registerUserData[key as keyof IRegisterUserData].trim()) {
                            throw new Error(AppErrors.FILL_IN_ALL_FIELDERS_OF_REGISTERS);
                        }
                    }
                    if (registerUserData.password !== registerUserData.repeatPassword) {
                        throw new Error(AppErrors.PASSWORDS_DO_NOT_MATCH);
                    }

                    const newUser = {
                        firstName: registerUserData.firstName,
                        userName: registerUserData.userName,
                        email: registerUserData.email,
                        password: registerUserData.password
                    };
                    const userData = await axiosInstance.post('auth/register', newUser);
                    const loginData = {
                        email: userData.data.email,
                        password: registerUserData.password
                    };
                    const registeredUserData = await axiosInstance.post('auth/login', loginData);
                    await dispatch(login(registeredUserData.data));
                    navigate('/');
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
                        onSubmit={handleSubmit}
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
                        {location.pathname === '/login'
                                ? <LoginPage
                                        navigate={navigate}
                                        setUserData={setLoginUserData}
                                />
                                : location.pathname === '/register'
                                        ? <RegisterPage
                                                navigate={navigate}
                                                setUserData={setRegisterUserData}
                                        />
                                        : null}
                    </Box>
                </form>
            </div>
    );

};

