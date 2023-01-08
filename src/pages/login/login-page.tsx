import { FC, useState } from 'react';
import { Button, Heading, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'firebase-config';
import { FormWrapper } from 'components/form-wrapper';
import { getErrorMessage, getSuccessMessage } from 'utils';
import { Loader } from 'components/loader';
import { LoginPageFormValues } from './login-page-interfaces';
import { loginValidationSchema } from 'common/validation-schemes';
import { PasswordField, TextField } from 'components/fields';
import { ROUTES, TEXTS } from 'common/constants';
import { useLangContext } from 'context';

export const LoginPage: FC = () => {
  const { language } = useLangContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const signInUserHandler = async (values: LoginPageFormValues) => {
    const { email, password } = values;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      getSuccessMessage(TEXTS[language].MESSAGES.SIGN_IN_SUCCESS);
      navigate(ROUTES.MAIN);
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error(errorMessage);
      getErrorMessage(TEXTS[language].MESSAGES.SIGN_IN_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <Formik<LoginPageFormValues>
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchema(language)}
      onSubmit={(values) => signInUserHandler(values)}
    >
      <Form>
        <FormWrapper>
          <Heading>Chat</Heading>
          <Text fontSize="lg">{TEXTS[language].LABELS.LOGIN}</Text>
          <TextField
            name="email"
            label={TEXTS[language].FIELDS.EMAIL}
            placeholder={TEXTS[language].FIELDS.EMAIL}
          />
          <PasswordField
            name="password"
            label={TEXTS[language].FIELDS.PASSWORD}
            placeholder={TEXTS[language].FIELDS.PASSWORD}
          />
          <Button type="submit">{TEXTS[language].BUTTONS.SIGN_IN}</Button>
          <Text fontSize='xs'>
            {TEXTS[language].LABELS.CREATE_ACCOUNT}
            <Link to="/register">{TEXTS[language].LABELS.REGISTER}</Link>
          </Text>
        </FormWrapper>
      </Form>
    </Formik>
  );
};