import { FC, memo } from 'react';
import { Field, FieldProps } from 'formik';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FieldControl } from '../field-control';
import { PasswordFieldProps } from './password-field-interfaces';
import { usePasswordFieldHook } from './password-field-hook';

export const PasswordField: FC<PasswordFieldProps> = memo(props => {
  const { label, name, ...restProps } = props;
  const { showPassword, togglePasswordHandler } = usePasswordFieldHook();

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
              <Button h='1.75rem' size='sm' onClick={togglePasswordHandler}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FieldControl>
      )}
    </Field>
  );
});