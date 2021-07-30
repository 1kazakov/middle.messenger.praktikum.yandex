import pageTemplates from './404.temp';
import Block from '../../utils/block';

const context = {
  namePage: '404',
  errorText: 'Не туда попали',
  linkText: 'Назад к чатам',
};

class Page404 extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      ...this.props,
    })
  }
} 

const page = new Page404(context);

function render(block: any) {
  document.body.appendChild(block.getContent());
}

render(page);
