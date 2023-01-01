import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useFormik } from 'formik';

import { auth } from '../../firebase-config';
import { getErrorMessage, getSuccessMessage } from 'utils';
import { RegisterPageFormValues } from './register-page-interfaces';
import { validationSchema } from 'common/validation-schemes';

export const useRegisterPageHook = () => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: async (values: RegisterPageFormValues) => {
      try {
        const response = await createUserWithEmailAndPassword(auth, values.email, values.password);
        await updateProfile(response.user, {
          displayName: values.name,
        });
        getSuccessMessage('Registration was successful!');
        resetForm();
      } catch (error) {
        const errorMessage = (error as Error).message;
        getErrorMessage(errorMessage);
      }
    }
  });

  return {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
  };
};