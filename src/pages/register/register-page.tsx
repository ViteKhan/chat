import { FC, useState } from 'react';
import { Button, Heading, Text } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { auth, db } from 'firebase-config';
import { formatName } from './register-page-utils';
import { FormWrapper } from 'components/form-wrapper';
import { getErrorMessage, getSuccessMessage } from 'utils';
import { PasswordField, TextField } from 'components/fields';
import { RegisterPageFormValues } from './register-page-interfaces';
import { registerValidationSchema } from 'common/validation-schemes';
import { ROUTES } from 'common/constants';

export const RegisterPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const registerUserHandler = async (values: RegisterPageFormValues) => {
    const { firstName, lastName, email, password } = values;
    const displayName = `${formatName(firstName)} ${formatName(lastName)}`;

    try {
      setIsLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(response.user, {
        displayName,
      });
      await setDoc(doc(db, 'users', response.user.uid), {
        uid: response.user.uid,
        displayName,
        email,
      });
      await setDoc(doc(db, 'userChats', response.user.uid), {});
      getSuccessMessage('Registration was successful!');
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
    <Formik<RegisterPageFormValues>
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={registerValidationSchema}
      onSubmit={(values) => registerUserHandler(values)}
    >
      <Form>
        <FormWrapper>
          <Heading>Chat</Heading>
          <Text fontSize="lg">Register</Text>
          <TextField
            name="firstName"
            label="First name"
            placeholder="First name"
          />
          <TextField
            name="lastName"
            label="Last name"
            placeholder="Last name"
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
          <Text fontSize='xs'>Do you have an account? <Link to="/login">Login</Link></Text>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
