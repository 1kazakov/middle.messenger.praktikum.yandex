import Templator from './utils/templator';

const root = document.querySelector('#root');
const testTempl = `
<div>
  {{ field1 }}
  <span>{{field2}}</span>
  <span>{{ field3.info.name }}</span>
</div>
`;

console.log('testTempl', testTempl);
const tmpl = new Templator(testTempl);

const context = {
  field1: 'Text 1',
  field2: 42,
  field3: {
    info: {
      name: 'Simon',
    },
  },
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой

root.innerHTML = renderedTemplate; // Показался нужный результат
