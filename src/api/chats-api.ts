import HTTP from '../utils/fetch';

const chatsAPIInstance = new HTTP();

export default class ChatsAPI {
  public async getChats(data: {[key: string]: any}) {
    const response: any = await chatsAPIInstance.get('/chats', data);
    if (response.status === 200) {
      return response.response;
    }
    throw new Error(response);
  }
  public async createNewChat(data: {[key: string]: any}) {
    const response: any = await chatsAPIInstance.post('/chats', data);
    if (response.status === 200) {
      return response;
    }
    throw new Error(response);
  }
  public async getToken(id: string) {
    return chatsAPIInstance.post(`/chats/token/${id}`);
  }
}
