import HTTP from '../utils/fetch';

const chatsAPIInstance = new HTTP();

export default class ChatsAPI {
  public async getChats(data: {[key: string]: any}) {
    return chatsAPIInstance.get('/chats', data);
  }
  public async createNewChat(data: {[key: string]: any}) {
    return chatsAPIInstance.post('/chats', data);
  }
  public async getToken(id: string) {
    return chatsAPIInstance.post(`/chats/token/${id}`);
  }
}
