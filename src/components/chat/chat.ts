import Block from '../../utils/block';
import chatsTemp from './chat.temp';

export default class Chat extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, chatsTemp);
  }
}
