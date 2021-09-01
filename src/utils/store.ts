import GlobalEventBus from './global-event-bus';
import getValue from './get-value';

import MessageModel from '../types/message';

export default class Store {
  private static __instance: Store;
  
  globalEventBus: () => {
    emit: (arg: string) => void,
  };
  state: {[key: string]: any}

  constructor() {
    if (Store.__instance) {
      return Store.__instance;
    }
    const globalEventBus = new GlobalEventBus();
    this.globalEventBus = () => globalEventBus;

    this.state = {
      user: {
        id: null
      },
      chats: [],
      chatsId: [],
      currentChat: null,
    };
    Store.__instance = this;
  }

  setValue = (propName: string, newValue: any) => {
    if (!newValue) {
      return;
    }

    if (propName === 'chats') {
      const newChats = newValue.filter((item: any) => !this.state.chatsId.includes(item.id));
      newChats.forEach((chat: any) => {
        chat.messages = [];
        chat.messagesIdMap = [];
      });
      this.state[propName].unshift(...newChats);
      this.state.chatsId = this.state.chats.reduce((acc: any, item: any) => {
        return acc.concat(item.id);
      }, []);
      try{
        this.globalEventBus().emit('update-chats');
      } catch(error) {
        console.log(error);
      }
    }

    if (propName === 'user') {
      Object.assign(this.state[propName], newValue);
      try{
        this.globalEventBus().emit('update-user-data');
      } catch(error) {
        console.log(error);
      }
    }
  };
  getProps = (path: string) => {
    return getValue(this.state, path);
  }

  setMessage = (id: string, messages: object[] ) => {
    const indexChat = this.state.chats.findIndex((chat: any) => chat.id === +id);
    if (indexChat === -1) {
      return;
    }
    const lastMessageInChat = this.state.chats[indexChat].last_message;
    const newMessages = Array.isArray(messages)
      ? messages.filter((message: MessageModel) => !this.state.chats[indexChat].messagesIdMap.includes(message.id)).reverse()
      : [messages].filter((message: MessageModel) => !this.state.chats[indexChat].messagesIdMap.includes(message.id)).reverse();
    const newMessageIdMap = newMessages.map((message: MessageModel) => message.id);
    this.state.chats[indexChat].messages.push(...newMessages);
    this.state.chats[indexChat].messagesIdMap.push(...newMessageIdMap);
    if (!lastMessageInChat) {
      this.state.chats[indexChat]['last_message'] = newMessages[newMessages.length - 1];
    }
    try{
      this.globalEventBus().emit('update-chats');
    } catch(error) {
      console.log(error);
    }
  }

  setCurrentChat = (id: string) => {
    this.state.currentChat = +id;
  }
}