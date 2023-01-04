import React, { FC, memo } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useField } from 'formik';

import { FieldControlProps } from './field-control-interfaces';

export const FieldControl: FC<FieldControlProps> = memo(({ children, label, name, ...restProps }) => {
  const fieldProps = useField(name);
  const { error, touched } = fieldProps[1];

  return (
    <FormControl
      isInvalid={touched && !!error}
      {...restProps}
    >
      <FormLabel>{label}</FormLabel>
      {children}
      {touched && error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
});