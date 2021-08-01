import pageTemplates from './login.temp';
import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import validate from '../../utils/validate';


const context: {
  namePage: string;
  login: any;
  password: any;
  button: any;
  signUpText: string;
  events: {[key: string]: any}
} = {
  namePage: 'Вход',
  login: new Input({ fildTitle: 'Логин',
                     name: 'login',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Логин',
                     value: ''  }),
  password: new Input({ fildTitle: 'Пароль',
                        name: 'password',
                        inputClass: 'input-list__item-input',
                        labelClass: 'input-list__item-label',
                        placeholder: 'Пароль',
                        value: ''  }),
  button: new Button({ buttonName: 'Авторизоваться',
               buttonType: 'submit',
               buttonClass: 'input-list__button button button-primary' }),
  signUpText: 'Создать новый аккаунт',
  events: {
    submit: (event: any) => {
      event.preventDefault();
      const formInput = [...event.target].filter(item => item.tagName === 'INPUT');
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
        const formInputs = [...form].filter(item => item.tagName === 'INPUT');
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
        const formInputs = [...form].filter(item => item.tagName === 'INPUT');
        validate(event.target, formInputs);
        console.log(`${event.target.name} ${event.target.value}`)
        return;
      }
      validate(event.target);
      console.log(`${event.target.name} ${event.target.value}`)
    },
  }
};

class PageLogin extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const html: string = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      signUpText: this.props.signUpText,
      login: this.props.login.render(),
      password: this.props.password.render(),
      button: this.props.button.render(),
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

const page = new PageLogin(context);

page.render()
