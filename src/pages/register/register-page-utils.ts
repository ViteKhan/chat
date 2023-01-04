import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth } from 'firebase-config';
import { getErrorMessage, getSuccessMessage } from 'utils';
import { RegisterPageFormValues } from './register-page-interfaces';

export const createUserHandler = (values: RegisterPageFormValues) => {
  const { displayName, email, password } = values;
  createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      updateProfile(response.user, {
        displayName,
      });
    })
    .then(() => {
      getSuccessMessage('Registration was successful!');
    })
    .catch(error => {
      const errorMessage = (error as Error).message;
      getErrorMessage(errorMessage);
    });
};