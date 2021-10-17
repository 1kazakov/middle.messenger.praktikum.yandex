import pageTemplates from './change-avatar.template';
import Block from '../../utils/Block';
import InputFile from '../../components/input-file/input-file';
import Button from '../../components/button/button';

export const context: {
  namePage: string;
  avatar: {[key: string]: string};
  newAvatar: any;
  buttonSave: any;
}  = {
  namePage: 'Изменение пароля',
  avatar: {
    image: 'какой-то url',
  },
  newAvatar: new InputFile({
    fildTitle: 'Выберите изображение',
    type: 'file',
    name: 'avatar',
    inputClass: 'visually-hidden',
    labelClass: 'input-list__item-label',
    buttonClass: 'button button-primary',
    buttonTitle: 'Выбрaть',
    value: '',
  }),
  buttonSave: new Button({
    buttonName: 'Сохранить',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
};

export class PageChangeAvatar extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: {...this.props.avatar},
      userData: [
        this.props.newAvatar.render(),
      ],
      buttonSave: this.props.buttonSave.render(),
    });
    return page;
  }
}
