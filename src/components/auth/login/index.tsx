import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {FieldValues, UseFormRegister,} from 'react-hook-form';
import {FieldErrors} from 'react-hook-form';

interface IProps<TFieldValues extends FieldValues = FieldValues> {
    navigate: NavigateFunction;
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
}

export const LoginPage: React.FC<IProps> = ({navigate, register, errors}): React.ReactElement => {
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
                        {...register('email', {
                            required: 'Field is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email is not correct'
                            }
                        })}
                        error={!!errors.email}
                        helperText={`${errors.email?.message}`}
                />
                <div>{errors.root?.message}</div>
                <TextField
                        type='password'
                        label='Password'
                        variant='outlined'
                        placeholder='Введите ваш пароль'
                        margin='normal'
                        fullWidth={true}
                        {...register('password', {
                            required: 'Field is required',
                            minLength: 6,
                        })}
                        error={!!errors.password}
                        helperText={`${errors.password?.message}`}
                />
                <div>{errors.root?.message}</div>
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

