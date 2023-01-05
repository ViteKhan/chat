import { FC, memo } from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from '@chakra-ui/react';

import { FieldControl } from '../field-control';
import { TextFieldProps } from './text-field-interfaces';

export const TextField: FC<TextFieldProps> = memo(props => {
  const { label, name, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <FieldControl label={label} name={name}>
          <Input {...restProps} {...field}/>
        </FieldControl>
      )}
    </Field>
  );
});