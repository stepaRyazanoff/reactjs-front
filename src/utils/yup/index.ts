import * as yup from 'yup';
import {AppErrors} from '../../common/errors';

export const loginSchema = yup
        .object()
        .shape({
            email: yup.string()
                    .email(AppErrors.InvalidEmail)
                    .required(AppErrors.FieldIsRequired),
            password: yup.string()
                    .min(6, AppErrors.MinLengthPassword)
                    .required(AppErrors.FieldIsRequired)
                    .matches(/^(?=.*[A-Z]).{6,}$/, AppErrors.IncorrectPasswordFormat),
        })
        .required();

export const registerSchema = yup
        .object()
        .shape({
            email: yup.string()
                    .email(AppErrors.InvalidEmail)
                    .required(AppErrors.FieldIsRequired),
            password: yup.string()
                    .min(6, AppErrors.MinLengthPassword)
                    .required(AppErrors.FieldIsRequired)
                    .matches(/^(?=.*[A-Z]).{6,}$/, AppErrors.IncorrectPasswordFormat),
            repeatPassword: yup.string()
                    .min(6, AppErrors.MinLengthPassword)
                    .required(AppErrors.FieldIsRequired)
                    .matches(/^(?=.*[A-Z]).{6,}$/, AppErrors.IncorrectPasswordFormat),
            firstName: yup.string().required(AppErrors.FieldIsRequired),
            userName: yup.string().required(AppErrors.FieldIsRequired),
        })
        .required();