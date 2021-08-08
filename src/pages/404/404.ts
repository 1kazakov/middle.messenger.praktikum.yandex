import pageTemplates from './404.template';
import Block from '../../utils/Block';

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
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      ...this.props,
    });
    document.body.append(page);
    return page;
  }
} 

new Page404(context);
