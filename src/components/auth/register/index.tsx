import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {InputRegisterData} from '../../../common/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerSchema} from '../../../utils/yup';
import {StyledAuthBox} from './styles';

interface IProps {
    navigate: NavigateFunction;
    onSubmit: SubmitHandler<InputRegisterData>;
}

export const RegisterForm: React.FC<IProps> = ({navigate, onSubmit}): React.ReactElement => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<InputRegisterData>({
        resolver: yupResolver(registerSchema)
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
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message || ''}
                    />
                    <TextField
                            label='Username'
                            variant='outlined'
                            placeholder='Введите ваш username'
                            margin='normal'
                            fullWidth={true}
                            {...register('userName')}
                            error={!!errors.userName}
                            helperText={errors.userName?.message || ''}
                    />
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
                    <TextField
                            type='password'
                            label='Password confirmation'
                            variant='outlined'
                            placeholder='Подтвердите ваш пароль'
                            margin='normal'
                            fullWidth={true}
                            {...register('repeatPassword')}
                            error={!!errors.repeatPassword}
                            helperText={errors.repeatPassword?.message || ''}
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
                                style={{
                                    color: '#1900D5',
                                    cursor: 'pointer',
                                    marginLeft: '10px'
                                }}
                                onClick={() => navigate('/login')}
                        >
                        Авторизация
                    </span>
                    </Typography>
                </StyledAuthBox>
            </form>
    );
};

