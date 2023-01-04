import { InputProps } from '@chakra-ui/react';

export interface PasswordFieldProps extends InputProps {
  label: string;
  name: string;
}

export type UsePasswordFieldHook = () => ({
  showPassword: boolean;
  togglePasswordHandler: () => void;
});