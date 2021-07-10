import Templator from './utils/templator';

const root = document.querySelector('#root');
const testTempl = `
<h1>{{ pageTitle }}</h1>
`;

console.log('testTempl', testTempl);
const tmpl = new Templator(testTempl);

const context = {
  pageTitle: 'Здесь будет страница чатов',
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой

root.innerHTML = renderedTemplate; // Показался нужный результат
