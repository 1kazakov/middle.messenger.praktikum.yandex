import HTTP from '../utils/fetch';

const userAPIInstance = new HTTP();

export default class UserAPI {
  public async updateUserData(data: {[key: string]: string}) {
    try {
      const response: any = await userAPIInstance.put('/user/profile', data);
      const userData: any = JSON.parse(response.response);
      return userData;
    } catch {
      throw new Error('Ошибка обновлени данных пользователя');
    }

  }
  public async updateUserPassword(data: {[key: string]: string}) {
    return userAPIInstance.put('/user/password', data);
  }
}
