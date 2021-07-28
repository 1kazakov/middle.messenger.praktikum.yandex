import pageTemplates from './404.temp';
import Block from '../../utils/Block';

const context = {
  namePage: '404',
  errorText: 'Не туда попали',
  linkText: 'Назад к чатам',
};

class Page404 extends Block {
  templator: () => {
    compile(template: string, context: {[key: string]: any}): string,
  };
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      ...this.props,
      button: this.props.button.render()
    })
  }
} 

const page = new Page404(context);

function render(block) {
  console.log('block.getContent()', block.getContent())
  document.body.appendChild(block.getContent());
}

render(page);
