import Block from '../../utils/Block';
import buttonTemp from './button.temp';

export default class Button extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, buttonTemp);
  }
}
