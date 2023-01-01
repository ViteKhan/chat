import React, { FC, memo, useState } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';

import { PasswordFieldProps } from './password-field-interfaces';

export const PasswordField: FC<PasswordFieldProps> = memo(({
 error,
 fullWidth,
 helperText,
 ...resProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl error={error} fullWidth={fullWidth}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? 'hide' : 'show'}
            </IconButton>
          </InputAdornment>
        }
        {...resProps}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
});

PasswordField.displayName = 'PasswordField';