import HTTP from '../utils/fetch';
import { BaseAPI } from './base-api';

const userAPIInstance = new HTTP();

export default class LoginAPI extends BaseAPI {
  public async updateUserData(data: {[key: string]: string}) {
    return userAPIInstance.put('https://ya-praktikum.tech/api/v2/user/profile', data);
  }
  public async updateUserPassword(data: {[key: string]: string}) {
    return userAPIInstance.put('https://ya-praktikum.tech/api/v2/user/password', data);
  }
}
