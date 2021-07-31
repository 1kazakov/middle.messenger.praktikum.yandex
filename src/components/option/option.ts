import Block from '../../utils/block';
import messageTmpl from './option.temp';

export default class Message extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, messageTmpl);
  }
}
