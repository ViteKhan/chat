export const DEFAULT_AVATAR = 'https://ih1.redbubble.net/image.1047737931.6850/st,small,507x507-pad,600x600,f8f8f8.jpg';

export const ROUTES = {
  MAIN: '/',
  REGISTER: 'register',
  LOGIN: 'login',
};

export const LANGUAGES = {
  EN: 'EN',
  RU: 'RU',
};

export const TEXTS = {
  [LANGUAGES.EN]: {
    MESSAGES: {
      SIGN_UP_SUCCESS: 'Registration was successful!',
      SIGN_IN_SUCCESS: 'You have successfully logged in!',
      SIGN_UP_ERROR: 'Something went wrong!',
      SIGN_IN_ERROR: 'Incorrect email or password',
    },
    FIELDS: {
      FIRST_NAME: 'First name',
      LAST_NAME: 'Last name',
      EMAIL: 'Email',
      PASSWORD: 'Password',
      CONFIRM_PASSWORD: 'Confirm password',
    },
    BUTTONS: {
      SIGN_UP: 'Sign up',
      SIGN_IN: 'Sign in',
    },
    LABELS: {
      REGISTER: 'Register',
      LOGIN: 'Login',
      CREATE_ACCOUNT: 'You dont have an account? ' ,
      LOGIN_ACCOUNT: 'Do you have an account? ',
    },
    VALIDATION: {
      REQUIRED: 'This field is required!',
      EMAIL: 'Invalid email!',
      PASSWORD: 'Password must have at least 6 characters!',
      CONFIRM_PASSWORD: 'Passwords must match!',
    },
  },
  [LANGUAGES.RU]: {
    MESSAGES: {
      SIGN_UP_SUCCESS: 'Регистрация прошла успешно!',
      SIGN_IN_SUCCESS: 'Вы успешно вошли в систему!',
      SIGN_UP_ERROR: 'Что-то пошло не так!',
      SIGN_IN_ERROR: 'Эл. почта или пароль введены не верно!',
    },
    FIELDS: {
      FIRST_NAME: 'Имя',
      LAST_NAME: 'Фамилия',
      EMAIL: 'Электронная почта',
      PASSWORD: 'Пароль',
      CONFIRM_PASSWORD: 'Подтвердите пароль',
    },
    BUTTONS: {
      SIGN_UP: 'Зарегистрироваться',
      SIGN_IN: 'Войти',
    },
    LABELS: {
      REGISTER: 'Регистрация',
      LOGIN: 'Вход',
      CREATE_ACCOUNT: 'У Вас еще нет аккаунта? ' ,
      LOGIN_ACCOUNT: 'У Вас уже есть аккаунт? ',
    },
    VALIDATION: {
      REQUIRED: 'Это поле обязательно для заполнения!',
      EMAIL: 'Некорректный адрес эл. почты!',
      PASSWORD: 'Пароль должен содержать не менее 6 символов!',
      CONFIRM_PASSWORD: 'Пароли должны совпадать!',
    },
  },
};