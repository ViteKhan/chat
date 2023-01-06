import { FC } from 'react';
import { Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';

import { auth } from 'firebase-config';
import { useAppContext } from 'context/app-context';

export const UserMenu: FC = () => {
  const { currentUser } = useAppContext();
  return (
    <Menu>
      <MenuButton>
        <Flex>
          {currentUser?.displayName}
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem>My Account</MenuItem>
        <MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};