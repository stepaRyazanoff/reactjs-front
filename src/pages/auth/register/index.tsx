import React from 'react';
import {TextField} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {InputRegisterData} from '../../../common/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerSchema} from '../../../utils/yup';
import {
    StyledAuthBox,
    StyledAuthLink,
    StyledFormBottomLink,
    StyledHeaderText,
    StyledSubheaderText,
    StyledSubmitButton,
} from '../styles';

interface IProps {
    navigate: NavigateFunction;
    onSubmit: SubmitHandler<InputRegisterData>;
    isLoading: boolean;
}

export const RegisterForm: React.FC<IProps> = ({navigate, onSubmit, isLoading}): React.ReactElement => {
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
                    <StyledHeaderText>
                        Регистрация
                    </StyledHeaderText>
                    <StyledSubheaderText variant='body1'>
                        Введите данные для регистрации
                    </StyledSubheaderText>
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
                    <StyledSubmitButton
                            loading={isLoading}
                            variant='contained'
                            type='submit'
                    >
                        Зарегестрироваться
                    </StyledSubmitButton>

                    <StyledFormBottomLink variant='body1'>У вас есть аккаунт?
                        <StyledAuthLink onClick={() => navigate('/login')}>
                            Авторизация
                        </StyledAuthLink>
                    </StyledFormBottomLink>
                </StyledAuthBox>
            </form>
    );
};

