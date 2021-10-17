import pageTemplates from './signup.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/list-item/list-item';
import SignUpController from '../../controllers/sign-up-controller';

const signUpController = new SignUpController();

export const context: {
  namePage: string
  userData: any[]
  buttonSingUp: any
  enterText: string
  events: any
}  = {
  namePage: 'Регистрация',
  userData: [
    new Input({
      fildTitle: 'Почта',
      name: 'email',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Почта',
      value: '',
    }),
    new Input({
      fildTitle: 'Логин',
      name: 'login',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Логин',
      value: '',
    }),
    new Input({
      fildTitle: 'Имя',
      name: 'first_name',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Имя',
      value: '',
    }),
    new Input({
      fildTitle: 'Фамилия',
      name: 'second_name',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Фамилия',
      value: '',
    }),
    new Input({
      fildTitle: 'Телефон',
      name: 'phone',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Телефон',
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
    new Input({
      fildTitle: 'Пароль (еще раз)',
      name: 'passwordRepeat',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Введите пароль раз',
      value: '',
    }),
  ],
  buttonSingUp: new Button({
    buttonName: 'Зарегистрироваться',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
  enterText: 'Войти',
  events: {
    'sing-up-form': {
      submit: signUpController.signUp,
    },
  }
};

export class PageSignUp extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      userData: this.props.userData.map((item: any) => item.render()),
      buttonSingUp: this.props.buttonSingUp.render(),
      enterText: this.props.enterText,
    });
    return page;
  }
  addEvents() {
    return true;
  }
  removeEvents() {
    return true;
  }
}
