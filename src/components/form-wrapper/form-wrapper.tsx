import { FC, memo } from 'react';
import { Flex } from '@chakra-ui/react';

import { FormWrapperProps } from './form-wrapper-interfaces';

export const FormWrapper: FC<FormWrapperProps> = memo(({ children }) => (
  <Flex justify="center" alignItems="center" h="100vh">
    <Flex
      flexDirection="column"
      gap="10px"
      p="20px"
      alignItems="center"
      borderRadius="10px"
      minWidth="400px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      {children}
    </Flex>
  </Flex>
));