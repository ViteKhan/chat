export type UseRegisterPageStateHook = () => ({
  name: string;
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
});