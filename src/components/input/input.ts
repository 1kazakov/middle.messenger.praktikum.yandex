import Block from '../../utils/block';
import inputTemp from './input.temp';

export default class Input extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, inputTemp);
  }
}
