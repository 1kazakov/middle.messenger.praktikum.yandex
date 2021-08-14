import HTTP from '../utils/fetch';
import { BaseAPI } from './base-api';

const authAPIInstance = new HTTP();

export default class SignInAPI extends BaseAPI {
  public async request(data: {[key: string]: any}) {
    console.log('kesha');
    
    return await authAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signup', data);
      // eslint-disable-next-line
      // .then(({ user_id }) => user_id); // Обрабатываем получение данных из сервиса далее
  }
}
