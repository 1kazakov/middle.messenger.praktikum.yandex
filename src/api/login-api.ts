import HTTP from '../utils/fetch';

const loginAPIInstance = new HTTP();

export default class LoginAPI {
  public async logining(data: {[key: string]: string}) {
    const reqData: any = loginAPIInstance.post('/auth/signin', data);
    if (reqData.status !== 200) {
      throw new Error (JSON.parse(reqData.response).reason);
    }
  }
  public async getUserData() {
    const userData: any = await loginAPIInstance.get('/auth/user');
    if (userData.status !== 200) {
      throw new Error (JSON.parse(userData.response).reason);
    }
    return userData.response;
  }
  public async logout() {
    return loginAPIInstance.post('/auth/logout');
  }
}
