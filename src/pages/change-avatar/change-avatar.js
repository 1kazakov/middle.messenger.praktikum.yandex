import loginTemplates from './change-avatar.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: 'Изменение пароля',
  avatar: {
    image: 'какой-то url',
  },
  userData: [
    { fildName: 'Выберите изображение', name: 'avatar', value: '' },
  ],
  buttonText: 'Сохранить',
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой

document.body.innerHTML = renderedTemplate; // Показался нужный результат
