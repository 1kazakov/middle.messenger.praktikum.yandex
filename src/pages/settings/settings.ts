import pageTemplates from './settings.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Setting from '../../components/setting/setting';
import UserLoginController from '../../controllers/login-controller';
import SettingsController from '../../controllers/settings-controller';

const userLoginController = new UserLoginController();
const settingsController = new SettingsController();

export const context: {
  namePage: string;
  avatar: string;
  buttonChangeAvatar: any;
  userData: {[key: string]: any}[];
  buttonChangeData: any;
  buttonChangePassword: any;
  buttonExit: any;
  events: any
} = {
  namePage: 'Настройки пользователя',
  avatar: 'какой-то url',
  buttonChangeAvatar: new Button({
    buttonName: 'Изменить аватар',
    buttonType: 'button',
    buttonClass: 'avatar__change-link button--text button--success',
  }),
  userData: [
    new Setting({ fildName: 'Почта', name: 'email', value: 'kazakov@yandex.ru' }),
    new Setting({ fildName: 'Логин', name: 'login', value: 'kazakov' }),
    new Setting({ fildName: 'Имя', name: 'first_name', value: 'Антон' }),
    new Setting({ fildName: 'Фамилия', name: 'second_name', value: 'Казаков' }),
    new Setting({ fildName: 'Имя в чате', name: 'display_name', value: 'Антон' }),
    new Setting({ fildName: 'Телефон', name: 'phone', value: '+7 (912) 646 59 00'}),
  ],
  buttonChangeData: 'Изменить данные',
  buttonChangePassword: 'Изменить пароль',
  buttonExit: new Button({
    buttonName: 'Выйти',
    buttonType: 'button',
    buttonClass: 'page-settings__link button--text button--error logout',
  }),
  events: {
    'logout': {
      click: userLoginController.logout,
    },
    'change-user-data': {
      click: settingsController.goChangeSettings,
    },
    'change-user-password': {
      click: settingsController.goChangePassword,
    },
  }
};

export class PageSettings extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  init() {
    this.globalEventBus().on('update-user-data', super._componentDidUpdate.bind(this));
  }
  componentDidMount() {
    const userData = this.store().getProps('user');
    this.props.userData.forEach((settingElement: any) => {
      settingElement.setProps({value: userData[settingElement._meta.props.name]});
    });
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      buttonChangeAvatar: this.props.buttonChangeAvatar.render(),
      userData: this.props.userData.map((item: any) => item.render()),
      buttonChangeData: this.props.buttonChangeData,
      buttonChangePassword: this.props.buttonChangePassword,
      buttonExit: this.props.buttonExit.render(),
    });
    return page;
  }
}
