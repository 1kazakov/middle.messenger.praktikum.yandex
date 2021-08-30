import HTTP from '../utils/fetch';
import { BaseAPI } from './base-api';

const authAPIInstance = new HTTP();

export default class SignInAPI extends BaseAPI {
  public async request(data: {[key: string]: any}) {
    return await authAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signup', data);
  }
}
