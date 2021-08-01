import loginTemplates from './signup.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: 'Регистрация',
  form: [
    { fildName: 'Почта', name: 'email' },
    { fildName: 'Логин', name: 'login' },
    { fildName: 'Имя', name: 'first_name' },
    { fildName: 'Фамилия', name: 'second_name' },
    { fildName: 'Телефон', name: 'phone' },
    { fildName: 'Пароль', name: 'password' },
    { fildName: 'Пароль (еще раз)', name: '' },
  ],
  buttonText: 'Зарегистрироваться',
  enterText: 'Войти',
};

const renderedTemplate = tmpl.compile(context);

document.body.innerHTML = renderedTemplate;
