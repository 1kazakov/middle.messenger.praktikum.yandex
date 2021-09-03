import HTTP from '../utils/fetch';

const loginAPIInstance = new HTTP();

export default class LoginAPI {
  public async logining(data: {[key: string]: string}) {
    const reqData: any = await loginAPIInstance.post('/auth/signin', data);
    if (reqData.status !== 200) {
      throw new Error ('Ошибка авторизации');
    }
  }
  public async getUserData() {
    const userData: any = await loginAPIInstance.get('/auth/user');
    if (userData.status !== 200) {
      throw new Error ('Ошибка получения данных пользователя');
    }
    try {
      const data = JSON.parse(userData.response);
      return data;
    } catch(erorr) {
      throw new Error ('Ошибка получения данных пользователя');
    }
  }
  public async logout() {
    return await loginAPIInstance.post('/auth/logout');
  }
}
