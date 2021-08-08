import pageTemplates from './login.template';
import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';


const context: {
  namePage: string;
  userData: any[]
  button: any;
  signUpText: string;
} = {
  namePage: 'Вход',
  userData: [
    new Input({
      fildTitle: 'Логин',
      name: 'login',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Логин',
      value: '',
    }),
    new Input({
      fildTitle: 'Пароль',
      name: 'password',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Пароль',
      value: '',
    }),
  ],
  button: new Button({
    buttonName: 'Авторизоваться',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
  signUpText: 'Создать новый аккаунт',
};

class PageLogin extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      signUpText: this.props.signUpText,
      userData: this.props.userData.map((item: any) => item.render()),
      button: this.props.button.render(),
    })
    document.body.append(page);
    return page;
  }
  addEvents() {
    return true;
  }
  removeEvents() {
    return true
  }
}

new PageLogin(context);
