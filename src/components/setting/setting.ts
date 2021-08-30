import Block from '../../utils/Block';
import settingTemplate from './setting.template';

export default class Setting extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, settingTemplate);
  }
}