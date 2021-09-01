import HTTP from '../utils/fetch';

const loginAPIInstance = new HTTP();

export default class LoginAPI {
  public async logining(data: {[key: string]: string}) {
    return loginAPIInstance.post('/auth/signin', data);
  }
  public async getUserData() {
    return loginAPIInstance.get('/auth/user');
  }
  public async logout() {
    return loginAPIInstance.post('/auth/logout');
  }
}
