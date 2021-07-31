import pageTemplates from './change-user-data.temp';
import Block from '../../utils/block';
import Button from '../../components/button/button';
import Input from '../../components/input/input';

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
};


class PageChangeUserData extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    return this.templator().compile(pageTemplates, {
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
  }
}

const page = new PageChangeUserData(context);

function render(block) {
  document.body.appendChild(block.getContent());
}

render(page);
