import ChatsAPI from '../api/chats-api';
import Router from '../utils/router';
import Store from '../utils/store';
import { validateForm } from '../utils/validate.utils';

const chatsAPI = new ChatsAPI();

export default class ChatsController {
  router: any
  store: any
  socket: any;
  constructor() {
    const router = new Router();
    const store = new Store();
    this.router = () => router;
    this.store = () => store;
    this.socket = null;
  }
  public getChats = async () => {
    try {
      // Запускаем крутилку
      const chatsData: any = await chatsAPI.getChats({ data: {offset: 0, limit: 5} });
      if (chatsData.status === 200) {
        this.store().setValue('chats', JSON.parse(chatsData.response));
      }

      // Останавливаем крутилку
    } catch (error) {
      console.log(error);
    }
  }
  public createNewChat = async (event: any) => {
    try {
      event.preventDefault();
      const data = validateForm(event.target);
      // Запускаем крутилку
      const payload = JSON.stringify({
        title: data.title,
      });
      const newChat: any = await chatsAPI.createNewChat({ data: payload });
      if (newChat.status === 200) {
        await this.getChats();
      }
    } catch {

    }
  }
  public goSettings = () => {
    this.router().go('/settings');
  }
  public chooseChat = async (event: any) => {
    event.stopPropagation();
    const chatId = event.target.dataset.chatId;
    this.store().setCurrentChat(chatId);
    const userId = this.store().getProps('user.id');
    let tokenReuqest: any = await chatsAPI.getToken(chatId);
    const { token } = JSON.parse(tokenReuqest.response);

    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      this.socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      })); 

    });

    this.socket.addEventListener('close', (event: any) => {
      if (event.wasClean) {
          console.log('Соединение закрыто чисто');
      } else {
          console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event: any) => {
      this.store().setMessage(chatId, JSON.parse(event.data));
      console.log('Получены данные', event.data);
    });

    this.socket.addEventListener('error', (event: any) => {
      console.log('Ошибка', event.message);
    });
  }
  public sendMessage = (event: any) => {
    event.preventDefault();
    console.dir(event.target);
    
    const message = [...event.target].filter((item: any) => item.name === 'message')[0].value.trim();
    if (!message) {
      return;
    }
    this.socket.send(JSON.stringify({
      content: message,
      type: 'message',
    }));
  } 
} 
