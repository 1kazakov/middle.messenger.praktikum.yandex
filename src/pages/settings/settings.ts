import pageTemplates from './settings.temp';
import Block from '../../utils/Block';
import Button from '../../components/button/button';

const context: {
  namePage: string;
  avatar: string;
  buttonChangeAvatar: any;
  userData: {[key: string]: any}[];
  buttonChangeData: any;
  buttonChangePassword: any;
  buttonExit: any;
} = {
  namePage: 'Настройки пользователя',
  avatar: 'какой-то url',
  buttonChangeAvatar: new Button({ buttonName: 'Изменить аватар',
                 buttonType: 'button',
                 buttonClass: 'avatar__change-link button--text button--success' }),
  userData: [
    { fildName: 'Почта', name: 'email', value: 'kazakov@yandex.ru' },
    { fildName: 'Логин', name: 'login', value: 'kazakov' },
    { fildName: 'Имя', name: 'first_name', value: 'Антон' },
    { fildName: 'Фамилия', name: 'second_name', value: 'Казаков' },
    { fildName: 'Имя в чате', name: 'display_name', value: 'Антон' },
    { fildName: 'Телефон', name: 'phone', value: '+7 (912) 646 59 00'},
  ],
  buttonChangeData: new Button({ buttonName: 'Изменить данные',
               buttonType: 'button',
               buttonClass: 'page__link button--text button--success' }),
  buttonChangePassword: new Button({ buttonName: 'Изменить пароль',
               buttonType: 'button',
               buttonClass: 'page__link button--text button--success' }),
  buttonExit: new Button({ buttonName: 'Выйти',
               buttonType: 'button',
               buttonClass: 'page__link button--text button--error' }),
};

class PageSettings extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const html:string = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      buttonChangeAvatar: this.props.buttonChangeAvatar.render(),
      userData: this.props.userData,
      buttonChangeData: this.props.buttonChangeData.render(),
      buttonChangePassword: this.props.buttonChangePassword.render(),
      buttonExit: this.props.buttonExit.render(),
    })
    document.body.innerHTML = html;
    return html;
  }
}

const page = new PageSettings(context);

page.render();
