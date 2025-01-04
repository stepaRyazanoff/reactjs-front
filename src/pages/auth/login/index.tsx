import React from 'react';
import {TextField} from '@mui/material';
import {NavigateFunction} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {InputLoginData} from '../../../common/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../../../utils/yup';
import {
    StyledAuthBox,
    StyledForm,
    StyledFormBottomLink,
    StyledHeaderText,
    StyledAuthLink,
    StyledSubheaderText,
    StyledSubmitButton,
} from '../styles';

interface IProps {
    navigate: NavigateFunction;
    onSubmit: SubmitHandler<InputLoginData>;
    isLoading: boolean;
}

export const LoginForm: React.FC<IProps> = ({navigate, onSubmit, isLoading}): React.ReactElement => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<InputLoginData>({
        resolver: yupResolver(loginSchema)
    });
    return (
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledAuthBox>
                    <StyledHeaderText>
                        Авторизация
                    </StyledHeaderText>
                    <StyledSubheaderText variant='body1'>
                        Введите ваш логин и пароль
                    </StyledSubheaderText>

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
                    <StyledSubmitButton
                            loading={isLoading}
                            variant='contained'
                            type='submit'
                    >
                        Войти
                    </StyledSubmitButton>

                    <StyledFormBottomLink variant='body1'>
                        У вас нет аккаунта?
                        <StyledAuthLink onClick={() => navigate('/register')}>
                            Регистрация
                        </StyledAuthLink>
                    </StyledFormBottomLink>

                </StyledAuthBox>
            </StyledForm>
    );
};

