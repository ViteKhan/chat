import * as yup from 'yup';

import { TEXTS } from './constants';

export const registerValidationSchema = (language) => yup.object().shape({
  firstName: yup.string().required(TEXTS[language].VALIDATION.REQUIRED),
  lastName: yup.string().required(TEXTS[language].VALIDATION.REQUIRED),
  email: yup.string().email(TEXTS[language].VALIDATION.EMAIL).required(TEXTS[language].VALIDATION.REQUIRED),
  password: yup.string()
    .required(TEXTS[language].VALIDATION.REQUIRED)
    .min(6, TEXTS[language].VALIDATION.PASSWORD),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], TEXTS[language].VALIDATION.CONFIRM_PASSWORD),
});

export const loginValidationSchema = (language) => yup.object().shape({
  email: yup.string().email(TEXTS[language].VALIDATION.EMAIL).required(TEXTS[language].VALIDATION.REQUIRED),
  password: yup.string()
    .required(TEXTS[language].VALIDATION.REQUIRED)
    .min(6, TEXTS[language].VALIDATION.PASSWORD),
});