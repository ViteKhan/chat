import { useCallback, useState } from 'react';

import { UsePasswordFieldHook } from './password-field-interfaces';

export const usePasswordFieldHook: UsePasswordFieldHook = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordHandler = useCallback(() => setShowPassword(!showPassword), []);

  return {
    showPassword,
    togglePasswordHandler,
  };
};