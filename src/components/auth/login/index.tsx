import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {InputLoginData} from '../../../common/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../../../utils/yup';
import {StyledAuthBox} from './styles';

interface IProps {
    navigate: NavigateFunction;
    onSubmit: SubmitHandler<InputLoginData>;
}

export const LoginForm: React.FC<IProps> = ({navigate, onSubmit}): React.ReactElement => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<InputLoginData>({
        resolver: yupResolver(loginSchema)
    });
    return (

            <form style={{width: '80%'}} onSubmit={handleSubmit(onSubmit)}>
                <StyledAuthBox>
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
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message || ''}
                    />
                    <div>{errors.root?.message}</div>
                    <TextField
                            type='password'
                            label='Password'
                            variant='outlined'
                            placeholder='Введите ваш пароль'
                            margin='normal'
                            fullWidth={true}
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message || ''}
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
                                style={{
                                    color: '#1900D5',
                                    cursor: 'pointer',
                                    marginLeft: '10px'
                                }}
                                onClick={() => navigate('/register')}
                        >
                        Регистрация
                    </span>
                    </Typography>

                </StyledAuthBox>
            </form>
    );
};

