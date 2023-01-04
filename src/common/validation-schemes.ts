import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  displayName: yup.string().required('Name is required!'),
  email: yup.string().email('Invalid email!').required('Email is required!'),
  password: yup.string()
    .required('Password is required!')
    .min(6, 'Password must have at least 6 characters!'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});