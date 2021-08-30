import HTTP from '../utils/fetch';
import { BaseAPI } from './base-api';

const chatsAPIInstance = new HTTP();

export default class LoginAPI extends BaseAPI {
  public async getChats(data: {[key: string]: any}) {
    return chatsAPIInstance.get('https://ya-praktikum.tech/api/v2/chats', data);
  }
  public async createNewChat(data: {[key: string]: any}) {
    return chatsAPIInstance.post('https://ya-praktikum.tech/api/v2/chats', data);
  }
  public async getToken(id: string) {
    return chatsAPIInstance.post(`https://ya-praktikum.tech/api/v2/chats/token/${id}`);
  }
}
