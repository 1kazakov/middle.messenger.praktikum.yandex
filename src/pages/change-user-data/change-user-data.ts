import pageTemplates from './change-user-data.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import validate from '../../utils/validate';

const context: {
  namePage: string;
  avatar: string;
  email: any;
  login: any;
  firstName: any;
  secondName: any;
  displayName: any;
  phone: any;
  buttonSave: any;
  events: {[key: string]: any}
} = {
  namePage: 'Изменение данных пользователя',
  avatar:  'какой-то url',
  email: new Input({ fildTitle: 'Почта',
                     name: 'email',
                     type: 'text',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Почта',
                     value: 'kazakov@yandex.ru' }),
  login: new Input({ fildTitle: 'Логин',
                     name: 'login',
                     type: 'text',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Логин',
                     value: 'kazakov' }),
  firstName: new Input({ fildTitle: 'Имя',
                     name: 'first_name',
                     type: 'text',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Имя',
                     value: 'Антон' }),
  secondName: new Input({ fildTitle: 'Фамилия',
                     name: 'second_name',
                     type: 'text',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Фамилия',
                     value: 'Казаков' }),
  displayName: new Input({ fildTitle: 'Имя в чате',
                     name: 'display_name',
                     type: 'text',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Имя в чате',
                     value: 'Антон' }),
  phone: new Input({ fildTitle: 'Телефон',
                     name: 'phone',
                     type: 'text',
                     inputClass: 'input-list__item-input',
                     labelClass: 'input-list__item-label',
                     placeholder: 'Телефон',
                     value: '+7 (912) 646 59 00' }),
  buttonSave: new Button({ buttonName: 'Сохранить',
                           buttonType: 'submit',
                           buttonClass: 'input-list__button button button-primary' }),
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


class PageChangeUserData extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const html = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      userData: [
        this.props.email.render(),
        this.props.login.render(),
        this.props.firstName.render(),
        this.props.secondName.render(),
        this.props.displayName.render(),
        this.props.phone.render(),
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

const page = new PageChangeUserData(context);

page.render()
