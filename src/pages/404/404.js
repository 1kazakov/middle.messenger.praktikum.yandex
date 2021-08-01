import loginTemplates from './404.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: '404',
  errorText: 'Не туда попали',
  linkText: 'Назад к чатам',
};

const renderedTemplate = tmpl.compile(context);

document.body.innerHTML = renderedTemplate;
