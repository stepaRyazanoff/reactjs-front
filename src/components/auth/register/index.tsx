import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {FieldValues, UseFormRegister} from 'react-hook-form';

interface IProps<TFieldValues extends FieldValues = FieldValues> {
    navigate: NavigateFunction;
    register: UseFormRegister<TFieldValues>;
}

export const RegisterPage: React.FC<IProps> = ({navigate, register}): React.ReactElement => {
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
                        {...register('firstName')}
                />
                <TextField
                        label='Username'
                        variant='outlined'
                        placeholder='Введите ваш username'
                        margin='normal'
                        fullWidth={true}
                        {...register('userName')}
                />
                <TextField
                        label='Email'
                        variant='outlined'
                        placeholder='Введите ваш email'
                        margin='normal'
                        fullWidth={true}
                        {...register('email')}
                />
                <TextField
                        type='password'
                        label='Password'
                        variant='outlined'
                        placeholder='Введите ваш пароль'
                        margin='normal'
                        fullWidth={true}
                        {...register('password')}
                />
                <TextField
                        type='password'
                        label='Password confirmation'
                        variant='outlined'
                        placeholder='Подтвердите ваш пароль'
                        margin='normal'
                        fullWidth={true}
                        {...register('repeatPassword')}
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

