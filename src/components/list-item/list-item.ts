import Block from '../../utils/Block';
import inputTemp from './list-item.temp';

export default class Input extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, inputTemp);
  }
}
