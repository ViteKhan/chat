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
import { Loader } from 'components/loader';
import { PasswordField, TextField } from 'components/fields';
import { RegisterPageFormValues } from './register-page-interfaces';
import { registerValidationSchema } from 'common/validation-schemes';
import { ROUTES, TEXTS } from 'common/constants';
import { useLangContext } from 'context';

export const RegisterPage: FC = () => {
  const { language } = useLangContext();
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
        photoURL: response.user.photoURL,
      });
      await setDoc(doc(db, 'userChats', response.user.uid), {});
      getSuccessMessage(TEXTS[language].MESSAGES.SIGN_UP_SUCCESS);
      navigate(ROUTES.MAIN);
    } catch (error) {
      const errorMessage = (error as Error).message;
      getErrorMessage(`${TEXTS[language].MESSAGES.SIGN_UP_ERROR} (${errorMessage})`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader/>;
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
      validationSchema={registerValidationSchema(language)}
      onSubmit={(values) => registerUserHandler(values)}
    >
      <Form>
        <FormWrapper>
          <Heading>Chat</Heading>
          <Text fontSize="lg">{TEXTS[language].LABELS.REGISTER}</Text>
          <TextField
            name="firstName"
            label={TEXTS[language].FIELDS.FIRST_NAME}
            placeholder={TEXTS[language].FIELDS.FIRST_NAME}
          />
          <TextField
            name="lastName"
            label={TEXTS[language].FIELDS.LAST_NAME}
            placeholder={TEXTS[language].FIELDS.LAST_NAME}
          />
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
          <PasswordField
            name="passwordConfirmation"
            label={TEXTS[language].FIELDS.CONFIRM_PASSWORD}
            placeholder={TEXTS[language].FIELDS.CONFIRM_PASSWORD}
          />
          <Button type="submit">{TEXTS[language].BUTTONS.SIGN_UP}</Button>
          <Text fontSize='xs'>
            {TEXTS[language].LABELS.LOGIN_ACCOUNT}
            <Link to="/login">{TEXTS[language].LABELS.LOGIN}</Link>
          </Text>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
