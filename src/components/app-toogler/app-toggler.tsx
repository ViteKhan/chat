import { FC } from 'react';
import { Flex, IconButton, Select, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { LANGUAGES } from 'common/constants';
import { useAppContext } from 'context/app-context';

export const AppToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { language, changeLanguageHandler } = useAppContext();
  const icon = colorMode === 'light' ? <MoonIcon/> : <SunIcon/>;

  return (
    <Flex
      position="absolute"
      left="5"
      bottom="5"
      alignItems="center"
    >
      <IconButton
        aria-label='color-mode'
        icon={icon}
        onClick={toggleColorMode}
      />
      <Select
        value={language}
        onChange={event => changeLanguageHandler(event.target.value)}
      >
        <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
        <option value={LANGUAGES.RU}>{LANGUAGES.RU}</option>
      </Select>
    </Flex>
  );
};