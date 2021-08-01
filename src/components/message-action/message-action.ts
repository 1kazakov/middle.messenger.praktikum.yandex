import Block from '../../utils/Block';
import messageTmpl from './message-action.temp';

export default class Message extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, messageTmpl);
  }
}
