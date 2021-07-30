import pageTemplates from './500.temp';
import Block from '../../utils/block';

const context: {
  namePage: string
  errorText: string
  linkText: string
} = {
  namePage: '500',
  errorText: 'Мы уже фиксим',
  linkText: 'Назад к чатам',
};

class Page500 extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      errorText: this.props.errorText,
      linkText: this.props.linkText,
    })
  }
}


const page = new Page500(context);

function render(block) {
  document.body.appendChild(block.getContent());
}

render(page);