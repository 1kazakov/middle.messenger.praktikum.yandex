import Block from '../../utils/Block';
import inputTemp from './input-file.temp';

export default class InputFile extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, inputTemp);
  }
}
