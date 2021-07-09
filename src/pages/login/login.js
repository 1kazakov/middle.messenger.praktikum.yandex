import loginTemplates from './login.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: 'Вход',
  form: [
    { fildName: 'Логин', name: 'login' },
    { fildName: 'Пароль', name: 'password' },
  ],
  buttonText: 'Авторизоваться',
  signUpText: 'Создать новый аккаунт',
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой

document.body.innerHTML = renderedTemplate; // Показался нужный результат
