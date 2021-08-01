import loginTemplates from './settings.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: 'Настройки пользователя',
  avatar: {
    image: 'какой-то url',
    buttonChangeAvatar: 'Изменить аватар',
  },
  userData: [
    { fildName: 'Почта', name: 'email', value: 'kazakov@yandex.ru' },
    { fildName: 'Логин', name: 'login', value: 'kazakov' },
    { fildName: 'Имя', name: 'first_name', value: 'Антон' },
    { fildName: 'Фамилия', name: 'second_name', value: 'Казаков' },
    { fildName: 'Имя в чате', name: 'display_name', value: 'Антон' },
    { fildName: 'Телефон', name: 'phone', phone: '+7 (912) 646 59 00'},
  ],
  buttonChangeData: 'Изменить данные',
  buttonChangePassword: 'Изменить пароль',
  exitText: 'Выйти',
};

const renderedTemplate = tmpl.compile(context);

document.body.innerHTML = renderedTemplate;
