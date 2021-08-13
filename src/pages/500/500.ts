import pageTemplates from './500.template';
import Block from '../../utils/Block';

export const context: {
  namePage: string
  errorText: string
  linkText: string
} = {
  namePage: '500',
  errorText: 'Мы уже фиксим',
  linkText: 'Назад к чатам',
};

export class Page500 extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      errorText: this.props.errorText,
      linkText: this.props.linkText,
    });
    return page;
  }
}
