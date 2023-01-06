import { useState } from 'react';

import { UsePasswordFieldHook } from './password-field-interfaces';

export const usePasswordFieldHook: UsePasswordFieldHook = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordHandler = () => setShowPassword(!showPassword);

  return {
    showPassword,
    togglePasswordHandler,
  };
};