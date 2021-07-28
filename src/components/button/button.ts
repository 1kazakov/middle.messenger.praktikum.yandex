import Block from '../../utils/block';
import buttonTemp from './button.temp';
// import Templator from '../../utils/templator';

// const templator = new Templator();

export default class Button extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, buttonTemp);
  }
}
