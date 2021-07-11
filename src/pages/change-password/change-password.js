import loginTemplates from './change-password.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: 'Изменение пароля',
  avatar: {
    image: 'какой-то url',
  },
  userData: [
    { fildName: 'Старый пароль', name: 'oldPassword', value: '' },
    { fildName: 'Новый пароль', name: 'newPassword', value: '' },
    { fildName: 'Повторите новый пароль', name: 'passwordRepeat', value: '' },
  ],
  buttonText: 'Сохранить',
};

const renderedTemplate = tmpl.compile(context);

document.body.innerHTML = renderedTemplate;
