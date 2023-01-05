import { FormatNameUtil } from './register-page-interfaces';

export const formatName: FormatNameUtil = (name) => {
  const nameInLowerCase = name.toLowerCase();

  return nameInLowerCase.charAt(0).toUpperCase() + nameInLowerCase.slice(1);
};