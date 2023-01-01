import React, { FC } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';

import { PasswordField } from 'components/password-field';
import { useRegisterPageHook } from './register-page-hooks';

export const RegisterPage: FC = () => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values,
  } = useRegisterPageHook();

  return (
    <Box margin="100px auto" maxWidth="500px">
        <Typography align="center" variant="h4">Oliva</Typography>
        <Typography align="center" variant="h5">Register</Typography>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && !!errors.name}
          helperText={touched.name ? errors.name : ''}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && !!errors.email}
          helperText={touched.email ? errors.email : ''}
          variant="outlined"
          fullWidth
        />
        <PasswordField
          id="password"
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && !!errors.password}
          helperText={touched.password ? errors.password : ''}
          fullWidth
        />
        <PasswordField
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Confirm password"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.passwordConfirmation && !!errors.passwordConfirmation}
          helperText={touched.passwordConfirmation ? errors.passwordConfirmation : ''}
          fullWidth
        />
        <Button onClick={() => handleSubmit()}>
          Sign up
        </Button>
        <p>Do you have an account? Login</p>
    </Box>
  );
};
