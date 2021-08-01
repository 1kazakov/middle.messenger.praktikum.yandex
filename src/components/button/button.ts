import Block from '../../utils/Block';
import buttonTemp from './button.temp';
// import Templator from '../../utils/templator';

// const templator = new Templator();

export default class Button extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, buttonTemp);
  }
}
