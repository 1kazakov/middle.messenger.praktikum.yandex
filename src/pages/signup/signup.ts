import pageTemplates from './signup.temp';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import validate from '../../utils/validate';

const context: {
  namePage: string
  userData: any[]
  buttonSingUp: any
  enterText: string
  events: {[key: string]: any}
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
    // buttonType: 'button',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
  enterText: 'Войти',
  events: {
    submit: (event: any) => {
      event.preventDefault();
      const formInput = [...event.target].filter((item: any) => item.tagName === 'INPUT');
      validate(formInput);
      const formData = formInput.reduce((acc, item) => {
        acc[item.name] = item.value
        return acc;
      }, {});
      console.log(formData)
    },
    focus: (event: any) => {
      if (event.target.name === 'passwordRepeat') {
        const form = document.querySelector('form');
        const formInputs = [...form].filter((item: any) => item.tagName === 'INPUT');
        validate(event.target, formInputs);
        console.log(`${event.target.name} ${event.target.value}`)
        return;
      }
      validate(event.target);
      console.log(`${event.target.name} ${event.target.value}`)
    },
    blur: (event: any) => {
      if (event.target.name === 'passwordRepeat') {
        const form = document.querySelector('form');
        const formInputs = [...form].filter((item: any) => item.tagName === 'INPUT');
        validate(event.target, formInputs);
        console.log(`${event.target.name} ${event.target.value}`)
        return;
      }
      validate(event.target);
      console.log(`${event.target.name} ${event.target.value}`)
    },
  }
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
    const form = document.querySelector('form');
    form.addEventListener('submit', this.props.events.submit);
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('focus', this.props.events.focus));
    inputs.forEach(input => input.addEventListener('blur', this.props.events.blur));
  }
  removeEvents() {
    const form = document.querySelector('form');
    form.removeEventListener('submit', this.props.events.submit);
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.removeEventListener('focus', this.props.events.focus));
    inputs.forEach(input => input.removeEventListener('blur', this.props.events.blur));
  }
}

const page = new PageSingUp(context);

page.render()
