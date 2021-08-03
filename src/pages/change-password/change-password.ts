import pageTemplates from './change-password.template';
import Block from '../../utils/Block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import validate from '../../utils/validate';

const context: {
  namePage: string
  avatar: string
  oldPassword: any
  newPassword: any
  passwordRepeat: any
  buttonSave: any
  events: {[key: string]: any}
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

class PageChangePassword extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const html = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      userData: [
        this.props.oldPassword.render(),
        this.props.newPassword.render(),
        this.props.passwordRepeat.render(),
      ],
      buttonSave: this.props.buttonSave.render(),
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

const page = new PageChangePassword(context);

page.render()