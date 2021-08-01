import loginTemplates from './500.temp';
import Templator from '../../utils/templator';

const tmpl = new Templator(loginTemplates);

const context = {
  namePage: '500',
  errorText: 'Мы уже фиксим',
  linkText: 'Назад к чатам',
};

const renderedTemplate = tmpl.compile(context);

document.body.innerHTML = renderedTemplate;
