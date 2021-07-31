import pageTemplates from './change-avatar.temp';
import Block from '../../utils/block';
import InputFile from '../../components/input-file/input-file';
import Button from '../../components/button/button';

const context: {
  namePage: string;
  avatar: {[key: string]: string};
  newAvatar: any;
  buttonSave: any;
}  = {
  namePage: 'Изменение пароля',
  avatar: {
    image: 'какой-то url',
  },
  newAvatar: new InputFile({ fildTitle: 'Выберите изображение',
                      type: 'file',
                      name: 'avatar',
                      inputClass: 'visually-hidden',
                      labelClass: 'input-list__item-label',
                      buttonClass: 'button button-primary',
                      buttonTitle: 'Выбрaть',
                      value: ''  }),
  buttonSave: new Button({ buttonName: 'Сохранить',
                           buttonType: 'submit',
                           buttonClass: 'input-list__button button button-primary' }),
};

class PageChangeAvatar extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: {...this.props.avatar},
      userData: [
        this.props.newAvatar.render(),
      ],
      buttonSave: this.props.buttonSave.render(),
    })
  }
}

const page = new PageChangeAvatar(context);

function render(block) {
  document.body.appendChild(block.getContent());
}

render(page);
