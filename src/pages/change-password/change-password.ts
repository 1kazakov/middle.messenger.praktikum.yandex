import pageTemplates from './change-password.temp';
import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

const context: {
  namePage: string
  avatar: string
  oldPassword: any
  newPassword: any
  passwordRepeat: any
  buttonSave: any
} = {
  namePage: 'Изменение пароля',
  avatar: 'какой-то url',
  oldPassword: new Input({
    fildTitle: 'Старый пароль',
    name: 'oldPassword',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Старый пароль',
    value: ''  }),
  newPassword: new Input({
    fildTitle: 'Новый пароль',
    name: 'newPassword',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Новый пароль',
    value: '',
  }),
  passwordRepeat: new Input({
    fildTitle: 'Повторите новый пароль',
    name: 'passwordRepeat',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Повторите новый пароль',
    value: '',
  }),
  buttonSave: new Button({
    buttonName: 'Сохранить',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
};

class PageChangePassword extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      userData: [
        this.props.oldPassword.render(),
        this.props.newPassword.render(),
        this.props.passwordRepeat.render(),
      ],
      buttonSave: this.props.buttonSave.render(),
    })
  }
}

const page = new PageChangePassword(context);

function render(block) {
  document.body.appendChild(block.getContent());
}

render(page);