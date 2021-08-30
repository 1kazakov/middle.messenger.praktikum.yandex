import pageTemplates from './signup.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

const context: {
  namePage: string
  userData: any[]
  buttonSingUp: any
  enterText: string
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
};

class PageSingUp extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const html: string = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      userData: this.props.userData.map((item: any) => item.render()),
      buttonSingUp: this.props.buttonSingUp.render(),
      enterText: this.props.enterText,
    })
    document.body.innerHTML = html;
    return html;
  }
  addEvents() {
    return true;
  }
  removeEvents() {
    return true
  }
}

const page = new PageSingUp(context);

page.render()
