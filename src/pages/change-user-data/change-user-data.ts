import pageTemplates from './change-user-data.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/list-item/list-item';
import UserController from '../../controllers/user-data-controller';

const userController = new UserController();

export const context: {
  namePage: string;
  avatar: string;
  userData: any[]
  buttonSave: any;
  events: {[key: string]: any}
} = {
  namePage: 'Изменение данных пользователя',
  avatar:  'какой-то url',
  userData: [
    new Input({
      fildTitle: 'Почта',
      name: 'email',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Почта',
      value: 'kazakov@yandex.ru',
    }),
    new Input({
      fildTitle: 'Логин',
      name: 'login',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Логин',
      value: 'kazakov',
    }),
    new Input({
      fildTitle: 'Имя',
      name: 'first_name',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Имя',
      value: 'Антон',
    }),
    new Input({
      fildTitle: 'Фамилия',
      name: 'second_name',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Фамилия',
      value: 'Казаков',
    }),
    new Input({
      fildTitle: 'Имя в чате',
      name: 'display_name',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Имя в чате',
      value: 'Антон',
    }),
    new Input({
      fildTitle: 'Телефон',
      name: 'phone',
      type: 'text',
      inputClass: 'input-list__item-input',
      labelClass: 'input-list__item-label',
      placeholder: 'Телефон',
      value: '+7 (912) 646 59 00',
    }),
  ],
  buttonSave: new Button({
    buttonName: 'Сохранить',
    buttonType: 'submit',
    buttonClass: 'input-list__button button button-primary',
  }),
  events: {
    'update-user-data': {
      submit: userController.updateUserData,
    },
  }
};


export class PageChangeUserData extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  componentDidMount() {
    const userData = this.store().getProps('user');
    this.props.userData.forEach((inputElement: any) => {
      inputElement.setProps({value: userData[inputElement._meta.props.name]})
    });
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      userData: this.props.userData.map((item: any) => item.render()),
      buttonSave: this.props.buttonSave.render(),
    })
    return page;
  }
  addEvents() {
    return true;
  }
  removeEvents() {
    return true
  }
}
