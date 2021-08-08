import pageTemplates from './chats.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/list-item/list-item';
import Chat from '../../components/chat/chat';
import Option from '../../components/option/option';
import Message from '../../components/message/message';
import MessageAction from '../../components/message-action/message-action';

const context: {
  namePage: string
  buttonProfile: any
  chats: any[]
  selectedChatAvatar: string
  selectedChatName:string
  optionList: any[]
  messages: any[]
  messagesActions: any[]
  buttonMessageActions: any
  inputMessage: any
  buttonSendMessage: any
} = {
  namePage: 'Чаты',
  buttonProfile: new Button({
    buttonName: 'Профиль',
    buttonType: 'button',
    buttonClass: 'input-list__button button button-primary',
  }),
  chats: [
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Андрей',
      chatLastMessage: 'Изображение',
      chatDate: '10:49',
      counterMessage: 4,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Киноклуб',
      chatLastMessage: 'стикер',
      chatDate: '12:00',
      counterMessage: 4,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Илья',
      chatLastMessage: 'Друзья, у меня для вас особенный выпуск новостей!...',
      chatDate: '15:12',
      counterMessage: 4,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'тет-а-теты',
      chatLastMessage: 'И Human Interface Guidelines и Material Design рекомендуют...',
      chatDate: 'Ср',
      counterMessage: 4,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: '1, 2, 3',
      chatLastMessage: 'Миллионы россиян ежедневно проводят десятки часов свое...',
      chatDate: 'Пн',
      counterMessage: 4,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Вадим',
      chatLastMessage: ' Круто!',
      chatDate: '10:49',
      counterMessage: 4,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Design Destroyer',
      chatLastMessage: 'В 2008 году художник Jon Rafman  начал собирать...',
      chatDate: 'Пн',
      counterMessage: 0,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Day.',
      chatLastMessage: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
      chatDate: '1 Мая 2020',
      counterMessage: 0,
    }),
    new Chat({
      chatAvatar: 'какой-то url',
      chatName: 'Стас Рогозин',
      chatLastMessage: 'Можно или сегодня или завтра вечером.',
      chatDate: '12 Апр 2020',
      counterMessage: 0,
    }),
  ],
  selectedChatAvatar: 'какой-то url',
  selectedChatName: 'Вадим',
  optionList: [
    new Option({
      optionText: "Добавить пользователя"
    }),
    new Option({
      optionText: "Удалить пользователя"
    }),
  ],
  messages: [
    new Message({
      message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      messageDate: '11:56',
    }),
    new Message({
      messageClass: 'message--my',
      message: `Круто! 
      <a href="/src/pages/login/login.html">login</a>
      <a href="/src/pages/signup/signup.html">sign-up</a>
      <a href="/src/pages/settings/settings.html">settings</a>
      <a href="/src/pages/change-user-data/change-user-data.html">change-user-data</a>
      <a href="/src/pages/change-password/change-password.html">change-password</a>
      <a href="/src/pages/change-avatar/change-avatar.html">change-avatar</a>
      <a href="/src/pages/404/404.html">404</a>`,
      messageDate: '12:00',
    })
  ],
  messagesActions: [
    new MessageAction({
      action: 'Фото или Видео',
    }),
    new MessageAction({
      action: 'Файл',
    }),
    new MessageAction({
      action: 'Локация',
    }),
  ],
  buttonMessageActions: new Button({
    buttonName: 'Actions',
    buttonType: 'submit',
    buttonClass: 'button-round--primary button-round',
  }),
  inputMessage: new Input({
    fildTitle: 'Сообщение',
    name: 'Message',
    inputClass: 'input-message__input',
    labelClass: 'visually-hidden',
    placeholder: 'Сообщение',
    value: '',
  }),
  buttonSendMessage: new Button({
    buttonName: '',
    buttonType: 'submit',
    buttonClass: 'button-round--primary button-round',
  }),
};


class PageChats extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      avatar: this.props.avatar,
      chats: this.props.chats.map((item: any)  => item.render()),
      selectedChatAvatar: this.props.selectedChatAvatar,
      selectedChatName: this.props.selectedChatName,
      optionList: this.props.optionList.map((item: any) => item.render()),
      messages: this.props.messages.map((item: any) => item.render()),
      inputMessage: this.props.inputMessage.render(),
      buttonSendMessage: this.props.buttonSendMessage.render(),
    });
    document.body.append(page);
    return page;
  }
}

new PageChats(context);
