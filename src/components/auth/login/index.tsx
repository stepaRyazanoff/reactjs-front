import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {ILoginUserData} from '../index';
import {NavigateFunction} from 'react-router-dom';

interface IProps {
    setUserData: React.Dispatch<React.SetStateAction<ILoginUserData>>;
    navigate: NavigateFunction;
}

export const LoginPage: React.FC<IProps> = ({setUserData, navigate}): React.ReactElement => {
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
                    Авторизация
                </Typography>
                <Typography
                        variant='body1'
                        sx={{
                            fontFamily: 'Poppins',
                            padding: 2,
                            textAlign: 'center'
                        }}
                >
                    Введите ваш логин и пароль
                </Typography>
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
                    Войти
                </Button>
                <Typography
                        variant='body1'
                        sx={{
                            fontFamily: 'Poppins',
                        }}
                >У вас нет аккаунта?
                    <span
                            className='incitingText'
                            onClick={() => navigate('/register')}
                    >
                        Регистрация
                    </span>
                </Typography>
            </>
    );
};

