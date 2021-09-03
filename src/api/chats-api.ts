import HTTP from '../utils/fetch';

const chatsAPIInstance = new HTTP();

export default class ChatsAPI {
  public async getChats(data: {[key: string]: any}) {
    try {
      const response: any = await chatsAPIInstance.get('/chats', data);
      if (response.status === 200) {
        const chats = JSON.parse(response.response);
        return chats;
      }
      throw new Error('Ошибка получения чатов');
    } catch {
      throw new Error('Ошибка получения чатов');
    }
  }
  public async createNewChat(data: {[key: string]: any}) {
    const response: any = await chatsAPIInstance.post('/chats', data);
    if (response.status === 200) {
      return response;
    }
    throw new Error('Ошибка создания чата');
  }
  public async getToken(id: string) {
    return chatsAPIInstance.post(`/chats/token/${id}`);
  }
}
