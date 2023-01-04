import React, { FC } from 'react';
import { Button, Heading, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';

import { createUserHandler } from './register-page-utils';
import { FormWrapper } from 'components/form-wrapper';
import { PasswordField, TextField } from 'components/fields';
import { RegisterPageFormValues } from './register-page-interfaces';
import { validationSchema } from 'common/validation-schemes';

export const RegisterPage: FC = () => {
  return (
    <Formik<RegisterPageFormValues>
      initialValues={{
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => createUserHandler(values)}
    >
      <Form>
        <FormWrapper>
          <Heading>Chat</Heading>
          <Text fontSize="lg">Register</Text>
          <TextField
            name="displayName"
            label="Name"
            placeholder="Name"
          />
          <TextField
            name="email"
            label="Email"
            placeholder="Email"
          />
          <PasswordField
            name="password"
            label="Password"
            placeholder="Password"
          />
          <PasswordField
            name="passwordConfirmation"
            label="Confirm password"
            placeholder="Confirm password"
          />
          <Button type="submit">Sign up</Button>
          <Text fontSize='xs'>Do you have an account? Login</Text>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
