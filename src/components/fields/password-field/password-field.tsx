import { FC, memo } from 'react';
import { Field, FieldProps } from 'formik';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { FieldControl } from '../field-control';
import { PasswordFieldProps } from './password-field-interfaces';
import { usePasswordFieldHook } from './password-field-hook';

export const PasswordField: FC<PasswordFieldProps> = memo(props => {
  const { label, name, ...restProps } = props;
  const { showPassword, togglePasswordHandler } = usePasswordFieldHook();
  const icon = showPassword ? <ViewOffIcon/> : <ViewIcon/>;

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <FieldControl label={label} name={name}>
          <InputGroup>
            <Input
              {...restProps}
              {...field}
              pr='4.5rem'
              type={showPassword ? 'text' : 'password'}
            />
            <InputRightElement width='4.5rem'>
              <IconButton
                h='1.75rem'
                size='sm'
                bg="inherit"
                aria-label='toggle-password'
                icon={icon}
                onClick={togglePasswordHandler}
              />
            </InputRightElement>
          </InputGroup>
        </FieldControl>
      )}
    </Field>
  );
});