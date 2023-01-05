import { FC, useState } from 'react';
import { Button, Heading, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase-config';
import { FormWrapper } from 'components/form-wrapper';
import { getErrorMessage, getSuccessMessage } from 'utils';
import { LoginPageFormValues } from './login-page-interfaces';
import { loginValidationSchema } from 'common/validation-schemes';
import { PasswordField, TextField } from 'components/fields';
import { ROUTES } from 'common/constants';

export const LoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const signInUserHandler = async (values: LoginPageFormValues) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(true);
      getSuccessMessage('You have successfully logged in!');
      navigate(ROUTES.MAIN);
    } catch (error) {
      const errorMessage = (error as Error).message;
      getErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Formik<LoginPageFormValues>
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => signInUserHandler(values)}
    >
      <Form>
        <FormWrapper>
          <Heading>Chat</Heading>
          <Text fontSize="lg">Login</Text>
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
          <Button type="submit">Sign in</Button>
          <Text fontSize='xs'>You dont have an account? <Link to="/register">Register</Link></Text>
        </FormWrapper>
      </Form>
    </Formik>
  );
};