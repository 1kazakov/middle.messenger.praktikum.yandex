import pageTemplates from './chats.template';
import Block from '../../utils/Block';
import Button from '../../components/button/button';
import Input from '../../components/list-item/list-item';
import Chat from '../../components/chat/chat';
import Option from '../../components/option/option';
import Message from '../../components/message/message';
import MessageAction from '../../components/message-action/message-action';
import ChatsController from '../../controllers/chats-controller';
import UserLoginController from '../../controllers/login-controller';

import ChatModel from '../../types/chat';
import MessageModel from '../../types/message';

const chatsController = new ChatsController();
const userController = new UserLoginController();

export const context: {
  namePage: string
  inputSearch: any
  buttonProfile: any
  inputTitleNewChat: any
  buttonNewChat: any
  chats: any[]
  selectedChat: boolean | number
  selectedChatAvatar: string
  selectedChatName:string
  optionList: any[]
  messages: any[]
  messagesActions: any[]
  buttonMessageActions: any
  inputMessage: any
  buttonSendMessage: any
  events: {[key: string]: any}
} = {
  namePage: 'Чаты',
  inputSearch: new Input({
    fildTitle: 'Поиск',
    name: 'Message',
    inputClass: 'input-message__input',
    labelClass: 'visually-hidden',
    placeholder: 'Поиск',
    value: '',
  }),
  buttonProfile: new Button({
    buttonName: 'Профиль',
    buttonType: 'button',
    buttonClass: 'button-text button-primary go-to-profile',
  }),
  inputTitleNewChat: new Input({
    fildTitle: 'Название нового чата',
    name: 'title',
    inputClass: 'input-message__input',
    labelClass: 'visually-hidden',
    placeholder: 'Название нового чата',
    value: '',
  }),
  buttonNewChat: new Button({
    buttonName: 'Создать чат',
    buttonType: 'submit',
    buttonClass: 'button button-primary ',
  }),
  chats: [],
  selectedChat: null,
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
      message: `Круто!`,
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
    name: 'message',
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
  events: {
    'create-new-chat': {
      submit: chatsController.createNewChat,
    },
    'go-to-profile': {
      click: chatsController.goSettings,
    },
    'choose-chat': {
      click: chatsController.chooseChat,
    },
    'send-message': {
      submit: chatsController.sendMessage,
    }
  }
};


export class PageChats extends Block {
  constructor(props: {[key: string]: any}) {
    super('div', props, pageTemplates);
  }
  async init() {
    this.globalEventBus().on('update-chats', super._componentDidUpdate.bind(this));
    await userController.getUserData();
    await chatsController.getChats();
  }
  componentDidMount() {
    const chatsRaw = this.store().getProps('chats');
    const chatsProps = chatsRaw.map((chat: ChatModel) => {
      const dateLastMessage = chat.last_message?.time ? new Date(chat.last_message?.time) : null;
      const time = dateLastMessage ? `${dateLastMessage.getHours()}:${dateLastMessage.getMinutes()}` : null;
      return new Chat({
      chatId: chat.id,
      chatAvatar: chat.avatar,
      chatName: chat.title,
      chatLastMessage: chat.last_message?.content,
      chatDate: time,
      counterMessage: chat.unread_count !== 0 ? chat.unread_count : null,
    })});
    this.props.chats = chatsProps;
    const currentChat = this.store().getProps('currentChat');
    const userId = this.store().getProps('user.id');
    if (currentChat) {
      const indexChat = chatsRaw.findIndex((chat: any) => chat.id === +currentChat);
      const messageProps = chatsRaw[indexChat].messages.map((message: MessageModel) => {
        const dateMessage = new Date(message.time);
        const time = `${dateMessage.getHours()}:${dateMessage.getMinutes()}`
        return new Message({
          messageClass: message.user_id === userId ? 'message--my' : '',
          message: message.content,
          messageDate: time,
        })
      })
      this.props.messages = messageProps;
    }
    this.props.selectedChat = !!currentChat;
  }
  render() {
    const page: HTMLElement = this.templator().compile(pageTemplates, {
      namePage: this.props.namePage,
      inputSearch: this.props.inputSearch.render(),
      buttonProfile: this.props.buttonProfile.render(),
      inputTitleNewChat: this.props.inputTitleNewChat.render(),
      buttonNewChat: this.props.buttonNewChat.render(),
      chats: this.props.chats.map((item: any)  => item.render()),
      selectedChat: this.props.selectedChat,
      selectedChatAvatar: this.props.selectedChatAvatar,
      selectedChatName: this.props.selectedChatName,
      optionList: this.props.optionList.map((item: any) => item.render()),
      messages: this.props.messages.map((item: any) => item.render()),
      inputMessage: this.props.inputMessage.render(),
      buttonSendMessage: this.props.buttonSendMessage.render(),
    });
    return page;
  }
}
