import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {IRegisterUserData} from '../index';

interface IProps {
    setUserData: React.Dispatch<React.SetStateAction<IRegisterUserData>>;
    navigate: NavigateFunction;
}

export const RegisterPage: React.FC<IProps> = ({setUserData, navigate}): React.ReactElement => {
    const handleChange = (value: string, propName: string) => {
        setUserData((prev) => ({
            ...prev,
            [propName]: value
        }));
    };
    return (
            <>
                <Typography
                        variant='h2'
                        sx={{
                            fontFamily: 'Poppins',
                            textAlign: 'center'
                        }}
                >
                    Регистрация
                </Typography>
                <Typography
                        variant='body1'
                        sx={{
                            fontFamily: 'Poppins',
                            padding: 2,
                            textAlign: 'center'
                        }}
                >
                    Введите данные для регистрации
                </Typography>
                <TextField
                        label='Имя'
                        variant='outlined'
                        placeholder='Введите ваше имя'
                        margin='normal'
                        fullWidth={true}
                        onChange={(e) => handleChange(e.target.value, 'firstName')}
                />
                <TextField
                        label='Username'
                        variant='outlined'
                        placeholder='Введите ваш username'
                        margin='normal'
                        fullWidth={true}
                        onChange={(e) => handleChange(e.target.value, 'userName')}
                />
                <TextField
                        label='Email'
                        variant='outlined'
                        placeholder='Введите ваш email'
                        margin='normal'
                        fullWidth={true}
                        onChange={(e) => handleChange(e.target.value, 'email')}
                />
                <TextField
                        type='password'
                        label='Password'
                        variant='outlined'
                        placeholder='Введите ваш пароль'
                        margin='normal'
                        fullWidth={true}
                        onChange={(e) => handleChange(e.target.value, 'password')}
                />
                <TextField
                        type='password'
                        label='Password confirmation'
                        variant='outlined'
                        placeholder='Подтвердите ваш пароль'
                        margin='normal'
                        fullWidth={true}
                        onChange={(e) => handleChange(e.target.value, 'repeatPassword')}
                />
                <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            fontFamily: 'Poppins',
                            marginTop: 2,
                            marginBottom: 2,
                            width: '60%',
                        }}
                >
                    Зарегестрироваться
                </Button>
                <Typography
                        variant='body1'
                        sx={{
                            fontFamily: 'Poppins',
                        }}
                >У вас есть аккаунт?
                    <span
                            className='incitingText'
                            onClick={() => navigate('/login')}
                    >
                        Авторизация
                    </span>
                </Typography>
            </>
    );
};

