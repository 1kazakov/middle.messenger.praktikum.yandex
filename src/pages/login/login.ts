import pageTemplates from './login.temp';
import Block from '../../utils/block';
import Input from '../../components/input/input';
import Button from '../../components/button/button';


const context: {
  namePage: string;
  login: any;
  password: any;
  button: any;
  signUpText: string;
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
};

class PageLogin extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      signUpText: this.props.signUpText,
      login: this.props.login.render(),
      password: this.props.password.render(),
      button: this.props.button.render(),
    })
  }
}

const page = new PageLogin(context);

function render(block) {
  document.body.appendChild(block.getContent());
}

render(page);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
  page.setProps({
    button: 'Click me, please',
  });
  render(page);
}, 1000);
