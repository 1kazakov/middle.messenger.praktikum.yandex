import HTTP from '../utils/fetch';
import { BaseAPI } from './base-api';

const authAPIInstance = new HTTP();

export default class LoginAPI extends BaseAPI {
  public async logining(data: {[key: string]: string}) {
    return await authAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signin', data);
      // eslint-disable-next-line
      // .then(({ user_id }) => user_id); // Обрабатываем получение данных из сервиса далее
  }
  public async getUserData() {
    return await authAPIInstance.get('https://ya-praktikum.tech/api/v2/auth/user');
  }
}
