import { useCallback, useState } from 'react';

import { UseRegisterPageStateHook } from './register-page-interfaces';

export const useRegisterPageStateHook: UseRegisterPageStateHook = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);
  const onChangeEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);
  const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  return {
    name,
    onChangeName,
    email,
    onChangeEmail,
    password,
    onChangePassword,
  };
};