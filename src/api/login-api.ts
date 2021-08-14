import HTTP from '../utils/fetch';
import { BaseAPI } from './base-api';

const authAPIInstance = new HTTP();

export default class LoginAPI extends BaseAPI {
  public async logining(data: {[key: string]: string}) {
    return authAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signin', data);
  }
  public async getUserData() {
    return authAPIInstance.get('https://ya-praktikum.tech/api/v2/auth/user');
  }
  public async logout() {
    return authAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/logout');
  }
}
