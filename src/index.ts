import Templator from './utils/templator';

const root = document.querySelector('#root');
const testTempl = `
<h1>{{ pageTitle }}</h1>
`;

const tmpl = new Templator();

const context = {
  pageTitle: 'Здесь будет страница чатов',
};

const renderedTemplate = tmpl.compile(testTempl, context);

root.innerHTML = renderedTemplate;
