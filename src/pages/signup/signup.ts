import pageTemplates from './signup.temp';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

const context: {
  namePage: string
  email: any
  login: any
  firstName: any
  secondName: any
  phone: any
  password: any
  passwordRepeat: any
  buttonSingUp: any
  enterText: string
}  = {
  namePage: 'Регистрация',
  email: new Input({
    fildTitle: 'Почта',
    name: 'email',
    type: 'text',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Почта',
    value: '',
  }),
  login: new Input({
    fildTitle: 'Логин',
    name: 'login',
    type: 'text',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Логин',
    value: '',
  }),
  firstName: new Input({
    fildTitle: 'Имя',
    name: 'first_name',
    type: 'text',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Имя',
    value: '',
  }),
  secondName: new Input({
    fildTitle: 'Фамилия',
    name: 'second_name',
    type: 'text',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Фамилия',
    value: '',
  }),
  phone: new Input({
    fildTitle: 'Телефон',
    name: 'phone',
    type: 'text',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Телефон',
    value: '',
  }),
  password: new Input({
    fildTitle: 'Пароль',
    name: 'password',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Gароль',
    value: '',
  }),
  passwordRepeat: new Input({
    fildTitle: 'Пароль (еще раз)',
    name: 'passwordRepeat',
    inputClass: 'input-list__item-input',
    labelClass: 'input-list__item-label',
    placeholder: 'Введите пароль раз',
    value: '',
  }),
  buttonSingUp: new Button({
    buttonName: 'Зарегистрироваться',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
  enterText: 'Войти',
};

class PageSingUp extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      userData: [
        this.props.email.render(),
        this.props.login.render(),
        this.props.firstName.render(),
        this.props.secondName.render(),
        this.props.phone.render(),
        this.props.password.render(),
        this.props.passwordRepeat.render(),
      ],
      buttonSingUp: this.props.buttonSingUp.render(),
      enterText: this.props.enterText,
    })
  }
}


const page = new PageSingUp(context);

function render(block) {
  document.body.appendChild(block.getContent());
}

render(page);
