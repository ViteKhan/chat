export interface RegisterPageFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export type FormatNameUtil = (name: string) => string;